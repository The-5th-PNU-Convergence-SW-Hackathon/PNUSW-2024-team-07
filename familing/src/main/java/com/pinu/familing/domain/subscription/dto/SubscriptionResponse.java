package com.pinu.familing.domain.subscription.dto;

import com.pinu.familing.domain.subscription.entity.Subscription;

public record SubscriptionResponse(String name,
                                   int price,
                                   String explanation) {

    public SubscriptionResponse(Subscription subscription) {
        this(subscription.getName(), subscription.getPrice(), subscription.getExplanation());
    }
}
