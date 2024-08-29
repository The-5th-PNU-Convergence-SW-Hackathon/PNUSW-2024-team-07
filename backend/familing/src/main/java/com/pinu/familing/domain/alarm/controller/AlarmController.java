package com.pinu.familing.domain.alarm.controller;


import com.pinu.familing.domain.alarm.service.AlarmService;
import com.pinu.familing.global.oauth.dto.CustomOAuth2User;
import com.pinu.familing.global.oauth.dto.PrincipalDetails;
import com.pinu.familing.global.util.ApiUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class AlarmController {
    private final AlarmService alarmService;

    //나의 알람을 불러온다.
    @GetMapping("alarms")
    public ApiUtils.ApiResult<?> getAlarm(@AuthenticationPrincipal PrincipalDetails principalDetails) {

        return ApiUtils.success(alarmService.loadAlarm(principalDetails.getUsername()));
    }

}
