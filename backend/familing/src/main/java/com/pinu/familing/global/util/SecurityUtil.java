package com.pinu.familing.global.util;

import com.pinu.familing.global.error.CustomException;
import com.pinu.familing.global.oauth.dto.CustomOAuth2User;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import static com.pinu.familing.global.error.ExceptionCode.USER_NOT_AUTHENTICATED;

public class SecurityUtil {


    public static CustomOAuth2User getUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated() || authentication.getPrincipal().equals("anonymousUser")) {
            throw new CustomException(USER_NOT_AUTHENTICATED);
        }
        return (CustomOAuth2User) authentication.getPrincipal();
    }

}
