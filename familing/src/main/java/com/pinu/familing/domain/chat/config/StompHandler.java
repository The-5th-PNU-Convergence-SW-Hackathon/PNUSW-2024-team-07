package com.pinu.familing.domain.chat.config;

import com.google.common.net.HttpHeaders;
import com.pinu.familing.domain.chat.service.ChatService;
import com.pinu.familing.global.error.CustomException;
import com.pinu.familing.global.jwt.JWTUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.stereotype.Component;

import static com.pinu.familing.global.error.ExceptionCode.TOKEN_EXPIRED;
import static com.pinu.familing.global.error.ExceptionCode.TOKEN_NOT_FOUND;

@Order(Ordered.HIGHEST_PRECEDENCE + 99) // 우선 순위를 높게 설정해서 SecurityFilter들 보다 앞서 실행되게 해준다.
@Component
@RequiredArgsConstructor
@Slf4j
public class StompHandler implements ChannelInterceptor {

    private final ChatService chatService;
    private final JWTUtil jwtUtil;

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        //StompHeaderAccessor의 헤더는 주로 클라이언트가 STOMP 메시지를 보낼 때 설정
        // 클라이언트는 STOMP 프레임을 보낼 때 다양한 헤더를 포함할 수 있다
        // 이러한 헤더는 서버에서 메시지를 처리할 때 StompHeaderAccessor를 통해 접근할 수 있다
        // 전달된 메시지를 StompHeaderAccessor로 래핑하여 STOMP 헤더에 쉽게 접근할 수 있게 한다
        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);
        // StompCommand에 따라서 로직을 분기해서 처리하는 메서드를 호출한다.
        String username = verifyAccessToken(getAccessToken(accessor));
        log.info("StompAccessor = {}", accessor);
        return message;
    }


    private String getAccessToken(StompHeaderAccessor accessor) {
        // 쿠키에서 JWT 토큰을 추출한다.
        String token = (String) accessor.getSessionAttributes().get("Authorization");
        if (token == null) {
            throw new CustomException(TOKEN_NOT_FOUND);
        }
        return token;

    }


    private String verifyAccessToken(String accessToken) {
        if (jwtUtil.isExpired(accessToken)) {
            throw new CustomException(TOKEN_EXPIRED);
        }

        return jwtUtil.getUsername(accessToken);
    }
}