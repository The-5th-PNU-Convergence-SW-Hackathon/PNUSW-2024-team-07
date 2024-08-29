package com.pinu.familing.domain.lovecard.controller;

import com.pinu.familing.domain.lovecard.service.LovecardService;
import com.pinu.familing.domain.snapshot.dto.CustomPage;
import com.pinu.familing.domain.lovecard.dto.LovecardRequest;
import com.pinu.familing.global.oauth.dto.CustomOAuth2User;
import com.pinu.familing.global.oauth.dto.PrincipalDetails;
import com.pinu.familing.global.util.ApiUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/vi/lovecards")
public class LovecardController{

    private final LovecardService lovecardService;

    //카드 조회(12개)
    @GetMapping
    public ApiUtils.ApiResult<?> getLoveCardList(Pageable pageable) {
        return ApiUtils.success(new CustomPage(lovecardService.getLovecardPage(pageable)));
    }

    //가족구성원별 주고받은 애정 카드 조회
    @GetMapping("/familys/{family_username}")
    public ApiUtils.ApiResult<?> getLoveCardLogList(@AuthenticationPrincipal PrincipalDetails principalDetails,
                                                    @PathVariable("family_username") String familyUsername,
                                                    Pageable pageable) {
        return ApiUtils.success(new CustomPage(lovecardService.getLovecardByFamilyLogPage(principalDetails.getUsername(), familyUsername,pageable)));
    }

    //원하는 가족에게 카드보내기
    @PostMapping("/familys/{family_username}")
    public ApiUtils.ApiResult<?> sendLoveCard(@AuthenticationPrincipal PrincipalDetails principalDetails,
                                                    @PathVariable("family_username") String familyUsername,
                                                    @RequestBody LovecardRequest lovecardRequest) {
        lovecardService.sendLoveCardToFamily(principalDetails.getUsername(), familyUsername, lovecardRequest);
        return ApiUtils.success("Lovecard has been sent successfully.");
    }


}
