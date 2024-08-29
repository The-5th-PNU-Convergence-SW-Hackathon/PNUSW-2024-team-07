package com.pinu.familing.domain.subscription.controller;

import com.pinu.familing.IntegrationTestSupport;
import com.pinu.familing.domain.subscription.repository.SubscriptionRepository;
import com.pinu.familing.domain.subscription.service.SubscriptionService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


class SubscriptionControllerTest  extends IntegrationTestSupport {

    private final SubscriptionService subscriptionService;

    @Autowired
    public SubscriptionControllerTest(SubscriptionService subscriptionService) {
        this.subscriptionService = subscriptionService;
    }

    @Test
    void showSubscriptionsTest() {
        //given
        //when
        //then
        System.out.println("subscriptionService.sendSubscriptions() = " + subscriptionService.sendSubscriptions());
    }


}