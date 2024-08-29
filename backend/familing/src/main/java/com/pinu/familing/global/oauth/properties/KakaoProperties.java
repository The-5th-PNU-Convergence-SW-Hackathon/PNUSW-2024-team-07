package com.pinu.familing.global.oauth.properties;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "spring.security.oauth.kakao") //내부적으로 세터를 이용해서 등록하게 한다.
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public record KakaoProperties(
        String authorizationCode,
        String codeRequestUri,
        String tokenRequestUri,
        String redirectUri,
        String userInfoUri,
        String clientId) {
}