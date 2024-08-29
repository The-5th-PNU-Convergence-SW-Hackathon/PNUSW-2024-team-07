package com.pinu.familing.domain.subscription.controller;

import com.pinu.familing.domain.subscription.dto.SubscriptionResponse;
import com.pinu.familing.domain.subscription.service.SubscriptionService;
import com.pinu.familing.global.util.ApiUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/subscription")
public class SubscriptionController {

    private final SubscriptionService subscriptionService;

    @GetMapping
    public ApiUtils.ApiResult<?> showSubscriptions() {
        List<SubscriptionResponse> subscriptionServices = subscriptionService.sendSubscriptions();
        return ApiUtils.success(subscriptionServices);
    }
}
