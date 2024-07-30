package com.pinu.familing.domain.user.controller;

import com.pinu.familing.global.oauth.dto.CustomOAuth2User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class UserController {
    @GetMapping("/user")
    public String testUser(CustomOAuth2User principal) {
        return principal.toString();
    }
}
