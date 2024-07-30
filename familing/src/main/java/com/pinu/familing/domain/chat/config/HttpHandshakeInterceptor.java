package com.pinu.familing.domain.chat.config;

import com.pinu.familing.domain.user.entity.User;
import com.pinu.familing.domain.user.repository.UserRepository;
import com.pinu.familing.global.error.CustomException;
import com.pinu.familing.global.error.ExceptionCode;
import com.pinu.familing.global.jwt.JWTUtil;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.http.server.ServletServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

import java.io.IOException;
import java.util.Map;
import java.util.Optional;

import static com.pinu.familing.global.error.ExceptionCode.USER_NOT_FOUND;

@Component
@RequiredArgsConstructor
@Slf4j
public class HttpHandshakeInterceptor implements HandshakeInterceptor {

    private final JWTUtil jwtUtil;

    private static final String ERROR_MESSAGE = "웹소켓 연결 오류!!";
    private final UserRepository userRepository;


    // 핸드쉐이크 이전에 수행
    //Map<String, Object> attributes
    //위에서 사용되는 attributes 맵은 웹소켓 핸드셰이크 과정에서 사용되는,
    // 서버와 클라이언트 간의 웹소켓 세션을 구성하는 데 필요한 데이터를 임시로 저장하는 공간이다.
    // 해당 맵은 HandshakeInterceptor 인터페이스의 beforeHandshake 메서드에 파라미터로 전달되며,
    // 웹소켓 연결이 성립되는 동안 해당 세션에 대한 메타데이터나 사용자 정의 데이터를 저장하는 데 사용된다.
    @Override
    public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler,
                                   Map<String, Object> attributes) throws Exception {

        HttpServletRequest req = ((ServletServerHttpRequest) request).getServletRequest();
        HttpServletResponse resp = ((ServletServerHttpResponse) response).getServletResponse();

        //사용자의 jwt토큰 추출
        String accessToken = extractAccessToken(req);
        return verifyTokenAndStoreMemberId(accessToken, attributes, resp);
    }

    private String extractAccessToken(HttpServletRequest req) {
        String authorization = null;
        Cookie[] cookies = req.getCookies();
        for (Cookie cookie : cookies) {

            System.out.println(cookie.getName());
            if (cookie.getName().equals("Authorization")) {

                authorization = cookie.getValue();
            }
        }
        return authorization;
    }

    private boolean verifyTokenAndStoreMemberId(String accessToken, Map<String, Object> attributes, HttpServletResponse resp)
            throws IOException {
        try {
            String username = jwtUtil.getUsername(accessToken);
            User user = userRepository.findByUsername(username).orElseThrow(() -> new CustomException(USER_NOT_FOUND));
            Long chatRoomId = user.getChatRoom().getId();
            attributes.put("chatRoomId", chatRoomId);
            attributes.put("username", username);
            attributes.put("Authorization", accessToken);
            return true;
        } catch (Exception e) {
            log.error(ERROR_MESSAGE);
//            CustomResponseUtil.handleTokenVerificationFailure(resp);
            return false;
        }
    }

    @Override
    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Exception exception) {
    }
}