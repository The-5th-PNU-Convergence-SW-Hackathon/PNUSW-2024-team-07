package com.pinu.familing.domain.subscription.repository;


import com.pinu.familing.domain.subscription.entity.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {


}
