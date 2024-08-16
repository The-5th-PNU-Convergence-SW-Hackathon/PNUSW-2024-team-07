package com.pinu.familing.domain.subscription.controller;

import com.pinu.familing.domain.subscription.repository.SubscriptionRepository;
import com.pinu.familing.domain.subscription.service.SubscriptionService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SubscriptionControllerTest {

    private final SubscriptionController subscriptionController;
    private final SubscriptionService subscriptionService;
    private final SubscriptionRepository subscriptionRepository;

    @Autowired
    public SubscriptionControllerTest(SubscriptionController subscriptionController,
                                      SubscriptionService subscriptionService,
                                      SubscriptionRepository subscriptionRepository) {
        this.subscriptionController = subscriptionController;
        this.subscriptionService = subscriptionService;
        this.subscriptionRepository = subscriptionRepository;
    }

    @Test
    void showSubscriptionsTest() {
        //given
        //when
        //then
        System.out.println("subscriptionService.sendSubscriptions() = " + subscriptionService.sendSubscriptions());
    }


}