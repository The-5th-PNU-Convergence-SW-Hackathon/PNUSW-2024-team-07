package com.pinu.familing.domain.subscription.service;

import com.pinu.familing.domain.subscription.dto.SubscriptionResponse;
import com.pinu.familing.domain.subscription.entity.Subscription;
import com.pinu.familing.domain.subscription.repository.SubscriptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SubscriptionService {

    private final SubscriptionRepository subscriptionRepository;

    //준형님은 바로 return 하시는 걸 더 좋아하시나요?
    public List<SubscriptionResponse> sendSubscriptions() {
        List<Subscription> subscriptions = subscriptionRepository.findAll();

        return subscriptions.stream()
                .map(SubscriptionResponse::new)
                .collect(Collectors.toList());

    }
}
