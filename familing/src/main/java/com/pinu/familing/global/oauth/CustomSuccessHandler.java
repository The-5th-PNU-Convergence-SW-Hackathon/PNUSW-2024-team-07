package com.pinu.familing.global.oauth;

import com.pinu.familing.global.jwt.JWTUtil;
import com.pinu.familing.global.oauth.dto.CustomOAuth2User;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Collection;
import java.util.Iterator;

@Component
public class CustomSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final JWTUtil jwtUtil;

    public CustomSuccessHandler(JWTUtil jwtUtil) {

        this.jwtUtil = jwtUtil;
    }

    //로그인 성공시 메서드 실행된다.
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

        //OAuth2User
        CustomOAuth2User customUserDetails = (CustomOAuth2User) authentication.getPrincipal();

        String username = customUserDetails.getName();

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Iterator<? extends GrantedAuthority> iterator = authorities.iterator();
        GrantedAuthority auth = iterator.next();
        String role = auth.getAuthority();
        String token = jwtUtil.createJwt(username, role, 60 * 60 * 60 * 60L);

        response.addCookie(createCookie("Authorization", token));
        // 로그인 성공 후 Redirect 주소
        if ("ROLE_PENDING_USER".equals(role)) { // Oauth만 인증되고 추가적인 요청 필요
            response.sendRedirect("myapp://auth/login");
        } else if ("ROLE_USER".equals(role)) { // 회원가입 완료
            response.sendRedirect("myapp://callback/register-screen1");
        } else {
            //Role이 없으면 다시 로그인 창으로
            response.sendRedirect("http://13.124.211.43/oauth2/authorization/kakao");
        }
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

        return cookie;
    }
}
