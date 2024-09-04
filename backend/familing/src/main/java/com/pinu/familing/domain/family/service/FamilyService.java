package com.pinu.familing.domain.family.service;


import com.pinu.familing.domain.chat.service.ChatService;
import com.pinu.familing.domain.family.dto.FamilyDto;
import com.pinu.familing.domain.family.dto.MyFamilyDto;
import com.pinu.familing.domain.family.entity.Family;
import com.pinu.familing.domain.family.handler.FamilyCodeHandler;
import com.pinu.familing.domain.family.repository.FamilyRepository;
import com.pinu.familing.domain.user.entity.User;
import com.pinu.familing.domain.user.repository.UserRepository;
import com.pinu.familing.domain.user.service.UserService;
import com.pinu.familing.global.error.CustomException;
import com.pinu.familing.global.error.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static com.pinu.familing.global.error.ExceptionCode.*;

@Service
@RequiredArgsConstructor
public class FamilyService {

    private final UserRepository userRepository;
    private final FamilyRepository familyRepository;
    private final ChatService chatService;
    private final UserService userService;


    //가족 만들기
    @Transactional
    public FamilyDto registerNewFamily(String username, String familyName) {
        String validCode = validFamilyCode(FamilyCodeHandler.createCode(username));

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));

        if (user.hasFamily()) {
            throw new CustomException(ALREADY_HAVE_FAMILY);
        }

        Family family = Family.builder()
                .familyName(familyName)
                .code(validCode)
                .build();

        Family savefamily = familyRepository.save(family);

        // 가족 등록할 때 가족 채팅방 가동 생성
        chatService.makeChatRoom(validCode);

        FamilyDto familyDto = FamilyDto.fromEntity(savefamily);

        userService.addFamilyToUser(username, familyDto.code());

        return familyDto;
    }


    @Transactional(readOnly = true)
    public MyFamilyDto getMyFamily(String username){
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));

        Family family = user.getFamily();
        if (family == null) {
            throw new CustomException(FAMILY_NOT_FOUND);
        }
        return MyFamilyDto.toEntity(user, family);
    }

    private String validFamilyCode(String code) {
        if (familyRepository.existsByCode(code)) {
            throw new CustomException(INVALID_CODE);
        }
        return code;
    }

}
