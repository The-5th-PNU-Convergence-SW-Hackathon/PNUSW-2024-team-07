package com.pinu.familing.global.oauth.service;

import com.pinu.familing.domain.user.entity.User;
import com.pinu.familing.domain.user.repository.UserRepository;
import com.pinu.familing.global.jwt.JWTUtil;
import com.pinu.familing.global.oauth.dto.AccessToken;
import com.pinu.familing.global.oauth.dto.KakaoProfileRequest;
import com.pinu.familing.global.oauth.dto.PrincipalDetails;
import com.pinu.familing.global.oauth.properties.KakaoProperties;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClient;

import static io.jsonwebtoken.lang.Strings.UTF_8;
import static org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED;

@Service
public class KakaoService {

    private static final MediaType FORM_URLENCODED = new MediaType(APPLICATION_FORM_URLENCODED, UTF_8);
    private static final String AUTHORIZATION = "Authorization";
    private static final String BEARER = "Bearer ";

    private final PrincipalService principalService;
    private final UserRepository userRepository;
    private final RestClient restClient;
    private final KakaoProperties kakaoProperties;
    private final JWTUtil jwtUtil;

    public KakaoService(PrincipalService principalService, UserRepository userRepository, KakaoProperties kakaoProperties, JWTUtil jwtUtil) {
        this.principalService = principalService;
        this.userRepository = userRepository;
        this.kakaoProperties = kakaoProperties;
        this.jwtUtil = jwtUtil;
        this.restClient = RestClient.create();
    }


    public String getKakaoLoginUrl() {
        return  kakaoProperties.codeRequestUri() +
                "?client_id=" + kakaoProperties.clientId()+
                "&redirect_uri=" + kakaoProperties.redirectUri() +
                "&response_type=code";
    }

    public AccessToken getKakaoAccessToken(String code) {
        MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
        map.add("grant_type", kakaoProperties.authorizationCode());
        map.add("client_id", kakaoProperties.clientId());
        map.add("redirect_uri", kakaoProperties.redirectUri());
        map.add("code", code);

        return restClient.post()
                .uri(kakaoProperties.tokenRequestUri())
                .contentType(FORM_URLENCODED)
                .body(map)
                .retrieve()
                .toEntity(AccessToken.class)
                .getBody();
    }

    public String saveKakaoLoginUser(AccessToken accessToken, HttpSession session) {

        //엑세스 토큰으로 유저 정보 가져오기
        KakaoProfileRequest kakaoProfile = restClient.post()
                .uri(kakaoProperties.userInfoUri())
                .contentType(FORM_URLENCODED)
                .header(AUTHORIZATION, BEARER + accessToken.accessToken())
                .retrieve()
                .toEntity(KakaoProfileRequest.class)
                .getBody();

        //유저 정보로 자체 회원 DB에 넣기
        User user = userRepository.findByUsername(kakaoProfile.username())
                .orElseGet(() -> {
                    User newUser = User.builder()
                            .username(kakaoProfile.username())
                            .nickname(kakaoProfile.nickname())
                            .realname(kakaoProfile.nickname())
                            .role("ROLE_PENDING_USER")
                            .build();
                    return userRepository.save(newUser);
                });


        //jwt 토큰 발급하기
        String token = jwtUtil.createJwt(user.getUsername(), user.getRole(), 60 * 60 * 60 * 60L);
        return token;
    }

}
