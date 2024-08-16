package com.pinu.familing.domain.user.service;

import com.pinu.familing.domain.family.entity.Family;
import com.pinu.familing.domain.family.repository.FamilyRepository;
import com.pinu.familing.domain.snapshot.service.SnapshotService;
import com.pinu.familing.domain.user.dto.ImageUrl;
import com.pinu.familing.domain.user.dto.Nickname;
import com.pinu.familing.domain.user.dto.Realname;
import com.pinu.familing.domain.user.dto.UserResponse;
import com.pinu.familing.domain.user.entity.User;
import com.pinu.familing.domain.user.repository.UserRepository;
import com.pinu.familing.global.error.CustomException;
import com.pinu.familing.global.error.ExceptionCode;
import com.pinu.familing.global.oauth.dto.CustomOAuth2User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static com.pinu.familing.global.error.ExceptionCode.USER_NOT_FOUND;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final FamilyRepository familyRepository;
    private final SnapshotService snapshotService;


    public UserResponse giveUserInformation(CustomOAuth2User customOAuth2User) {
        User user = userRepository.findByUsername(customOAuth2User.getName())
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
        return UserResponse.fromEntity(user);
    }


    @Transactional
    public void addFamilyToUser(CustomOAuth2User customOAuth2User, String code) {
        //유저 찾기
        User user = userRepository.findByUsername(customOAuth2User.getName())
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));

        Family family = familyRepository.findByCode(code)
                .orElseThrow(() -> new CustomException(ExceptionCode.INVALID_CODE));

        //내부에 예외 처리 부분 넣어놨습니다.
        user.registerFamily(family);

        snapshotService.createSnapshotDueToFamilyRegistration(user.getUsername());

    }

    @Transactional
    public void changeNickname(CustomOAuth2User customOAuth2User, Nickname nickname) {
        User user = userRepository.findByUsername(customOAuth2User.getName())
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
        user.updateNickname(nickname);
    }

    @Transactional
    public void changeRealname(CustomOAuth2User customOAuth2User, Realname realname) {
        User user = userRepository.findByUsername(customOAuth2User.getName())
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
        user.updateRealname(realname);
    }

    @Transactional
    public void changeImageUrl(CustomOAuth2User customOAuth2User, ImageUrl imageUrl) {
        User user = userRepository.findByUsername(customOAuth2User.getName())
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
        user.updateImageUrl(imageUrl);
    }

}
