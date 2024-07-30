package com.pinu.familing.domain.family.service;

import com.pinu.familing.domain.chat.service.ChatService;
import com.pinu.familing.domain.family.entity.Family;
import com.pinu.familing.domain.family.handler.FamilyCodeHandler;
import com.pinu.familing.domain.family.repositiry.FamilyRepository;
import com.pinu.familing.domain.user.entity.User;
import com.pinu.familing.domain.user.repository.UserRepository;
import com.pinu.familing.global.error.CustomException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static com.pinu.familing.global.error.ExceptionCode.INVALID_CODE;
import static com.pinu.familing.global.error.ExceptionCode.USER_NOT_FOUND;

@Service
@RequiredArgsConstructor
public class FamilyService {

    private final UserRepository userRepository;
    private final FamilyRepository familyRepository;
    private final ChatService chatService;


    //가족 만들기
    @Transactional
    public String registerNewFamily(String username,String familyName){
        String validCode = validFamilyCode(FamilyCodeHandler.createCode(username));
        Family family = new Family(familyName,validCode);
        Family savefamily = familyRepository.save(family);
        System.out.println(username);
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
        // 가족 등록할 때 가족 채팅방 가동 생성
        chatService.makeChatRoom(user, validCode);
        return savefamily.getCode();
    }

    @Transactional
    public void addFamilyToUser(String username, String code) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));

        Family family = familyRepository.findByCode(code)
                .orElseThrow(()-> new CustomException(INVALID_CODE));

        //내부에 예외 처리 부분 넣어놨습니다.
        user.registerFamily(family);

    }

    private String validFamilyCode(String code) {
        if (familyRepository.existsByCode(code)) {
            throw new CustomException(INVALID_CODE);
        }
        return code;
    }

}
