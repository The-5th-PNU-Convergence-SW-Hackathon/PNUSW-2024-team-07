package com.pinu.familing.domain.user.controller;

import com.pinu.familing.domain.user.dto.Nickname;
import com.pinu.familing.domain.user.dto.Realname;
import com.pinu.familing.domain.user.dto.UserResponse;
import com.pinu.familing.domain.user.service.UserService;
import com.pinu.familing.global.oauth.dto.CustomOAuth2User;
import com.pinu.familing.global.s3.S3ImgDto;
import com.pinu.familing.global.oauth.dto.PrincipalDetails;
import com.pinu.familing.global.util.ApiUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class UserController {

    private final UserService userService;

    @GetMapping("/user")
    public ApiUtils.ApiResult<UserResponse> giveUserInformation(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        return ApiUtils.success(userService.giveUserInformation(principalDetails.getUsername()));
    }

    //닉네임 변경
    @PatchMapping("/user/nickname")
    public ApiUtils.ApiResult<?> changeNickname(@AuthenticationPrincipal PrincipalDetails principalDetails, @RequestBody Nickname nickname) {
        userService.changeNickname(principalDetails.getUsername(), nickname);
        return ApiUtils.success("Successful nickname changed");
    }

    //진짜 이름 변경
    @PatchMapping("/user/realname")
    public ApiUtils.ApiResult<?> changeRealname(@AuthenticationPrincipal PrincipalDetails principalDetails, @RequestBody Realname realname) {
        userService.changeRealname(principalDetails.getUsername(), realname);
        return ApiUtils.success("Successful realname changed");
    }


    //프로필 이미지 변경
    @PatchMapping("/user/profile")
    public ApiUtils.ApiResult<?> changeImageUrl(@AuthenticationPrincipal PrincipalDetails principalDetails, @RequestPart MultipartFile profileImg) {
        S3ImgDto s3ImgDto = userService.changeProfileImg(principalDetails.getUsername(), profileImg);
        return ApiUtils.success(s3ImgDto);
    }
}
