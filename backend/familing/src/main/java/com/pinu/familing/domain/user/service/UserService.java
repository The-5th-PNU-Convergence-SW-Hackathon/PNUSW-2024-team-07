package com.pinu.familing.domain.user.service;

import com.pinu.familing.domain.family.entity.Family;
import com.pinu.familing.domain.family.repository.FamilyRepository;
import com.pinu.familing.domain.snapshot.service.SnapshotService;
import com.pinu.familing.domain.status.entity.Status;
import com.pinu.familing.domain.status.repository.StatusRepository;
import com.pinu.familing.domain.user.dto.Nickname;
import com.pinu.familing.domain.user.dto.Realname;
import com.pinu.familing.domain.user.dto.UserResponse;
import com.pinu.familing.domain.user.entity.User;
import com.pinu.familing.domain.user.repository.UserRepository;
import com.pinu.familing.global.error.CustomException;
import com.pinu.familing.global.error.ExceptionCode;
import com.pinu.familing.global.oauth.dto.CustomOAuth2User;
import com.pinu.familing.global.s3.AwsS3Service;
import com.pinu.familing.global.s3.S3ImgDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import static com.pinu.familing.global.error.ExceptionCode.USER_NOT_FOUND;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final FamilyRepository familyRepository;
    private final SnapshotService snapshotService;
    private final AwsS3Service awsS3Service;
    private final StatusRepository statusRepository;


    public UserResponse giveUserInformation(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
        return UserResponse.fromEntity(user);
    }


    @Transactional
    public void addFamilyToUser(String username, String code) {
        //유저 찾기
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));

        Family family = familyRepository.findByCode(code)
                .orElseThrow(() -> new CustomException(ExceptionCode.INVALID_CODE));

        user.registerFamily(family);
        setDefaultStatusValue(user);
    }

    private void setDefaultStatusValue(User user) {
        Status status = statusRepository.findByText("쉬는 중")
                .orElseThrow(() -> new CustomException(ExceptionCode.STATUS_NOT_FOUND));
        user.changeStatus(status);
    }

    @Transactional
    public void changeNickname(String username, Nickname nickname) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
        user.updateNickname(nickname);
    }

    @Transactional
    public void changeRealname(String username, Realname realname) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
        user.updateRealname(realname);
    }

    @Transactional
    public S3ImgDto changeProfileImg(String username, MultipartFile profileImg) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));

        String beforeProfile = user.getProfileImg();
        if (beforeProfile != null) { // 만약 이전 프로필 이미지가 있으면 삭제 없으면 그냥 추가
            awsS3Service.deleteFile(beforeProfile);
        }

        S3ImgDto s3ImgDto = awsS3Service.uploadFiles(profileImg);
        user.updateImageUrl(s3ImgDto.getUploadFileUrl());
        return s3ImgDto;
    }

}
