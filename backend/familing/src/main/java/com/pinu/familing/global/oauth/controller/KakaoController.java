package com.pinu.familing.global.oauth.controller;

import com.pinu.familing.global.oauth.dto.AccessToken;
import com.pinu.familing.global.oauth.service.KakaoService;
import com.pinu.familing.global.util.ApiUtils;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class KakaoController {

    private final KakaoService kakaoService;

    //0. 카카오 로그인 화면/api/v1/login/oauth/kakao 보여주기
    @GetMapping("/api/v1/login/oauth/kakao")
    public void requestKakaoLoginScreen(HttpServletResponse response) throws IOException {
        response.sendRedirect(kakaoService.getKakaoLoginUrl());
    }


    @GetMapping("/api/v1/login/oauth/kakao/code")
    public ApiUtils.ApiResult<?> requestKakaoLoginScreen(@RequestParam(value = "code") String code){
        String accessToken = kakaoService.getKakaoAccessToken(code).accessToken();
        return ApiUtils.success("AccessToken: "+ accessToken);
    }

    @PostMapping("/api/v1/login/oauth/kakao/callback")
    public ApiUtils.ApiResult<?> saveKakaoLoginUser(@RequestBody AccessToken accessToken, HttpSession session, HttpServletResponse response) {
        String token = kakaoService.saveKakaoLoginUser(accessToken,session);
        response.addCookie(createCookie("Authorization", token));
        return ApiUtils.success("Login completed successfully");
    }

    private Cookie createCookie(String key, String value) {

        Cookie cookie = new Cookie(key, value);
        cookie.setMaxAge(60 * 60 * 60);
        // https only
        //cookie.setSecure(true);
        //쿠기가 보일 위치
        cookie.setPath("/");
        // js가 쿠키를 가져가지 못하게
        cookie.setHttpOnly(true);

        cookie.setDomain("3.39.254.198");

        return cookie;
    }
}
