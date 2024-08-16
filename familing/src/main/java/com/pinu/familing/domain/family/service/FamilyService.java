package com.pinu.familing.domain.family.service;


import com.pinu.familing.domain.chat.service.ChatService;
import com.pinu.familing.domain.family.dto.FamilyDto;
import com.pinu.familing.domain.family.dto.MyFamilyDto;
import com.pinu.familing.domain.family.entity.Family;
import com.pinu.familing.domain.family.handler.FamilyCodeHandler;
import com.pinu.familing.domain.family.repository.FamilyRepository;
import com.pinu.familing.domain.user.entity.User;
import com.pinu.familing.domain.user.repository.UserRepository;
import com.pinu.familing.global.error.CustomException;
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


    //가족 만들기
    @Transactional
    public FamilyDto registerNewFamily(String username, String familyName) {
        String validCode = validFamilyCode(FamilyCodeHandler.createCode(username));

        Family family = Family.builder()
                .familyName(familyName)
                .code(validCode)
                .build();

        Family savefamily = familyRepository.save(family);
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
        // 가족 등록할 때 가족 채팅방 가동 생성
        chatService.makeChatRoom(user, validCode);
        return FamilyDto.fromEntity(savefamily);
    }


    @Transactional(readOnly = true)
    public MyFamilyDto getMyFamily(String username){
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));

        Family family = user.getFamily();
        if (family == null) {
            throw new CustomException(FAMILY_NOT_FOUND);
        }
        return MyFamilyDto.toEntity(family);
    }

    private String validFamilyCode(String code) {
        if (familyRepository.existsByCode(code)) {
            throw new CustomException(INVALID_CODE);
        }
        return code;
    }

}
