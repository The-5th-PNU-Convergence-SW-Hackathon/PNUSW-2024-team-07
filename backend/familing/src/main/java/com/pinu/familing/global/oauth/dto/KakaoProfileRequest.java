package com.pinu.familing.global.oauth.dto;

public record KakaoProfileRequest(Long id, Properties properties) {

    public String username() {
        return "kakao_" + this.id;
    }

    public String nickname() {
        return properties().nickname;
    }

    record Properties(String nickname) {
    }

}