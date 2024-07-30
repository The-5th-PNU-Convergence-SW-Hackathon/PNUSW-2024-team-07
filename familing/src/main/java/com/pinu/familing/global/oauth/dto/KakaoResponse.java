package com.pinu.familing.global.oauth.dto;

import java.util.Map;

public record KakaoResponse(Map<String, Object> attribute) implements OAuth2Response{

    @Override
    public String getProvider() {
        return "kakao";
    }

    @Override
    public String getProviderId() {

        return attribute.get("id").toString();
    }

    @Override
    public String getEmail() {
        return null;
    }

    @Override
    public String getOAuthName() {
        Map<String, Object> properties = (Map<String, Object>) attribute.get("properties");
        return properties.get("nickname").toString();
    }
}
