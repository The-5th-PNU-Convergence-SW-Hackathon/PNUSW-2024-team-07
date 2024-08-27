package com.pinu.familing.domain.status.repository;

import com.pinu.familing.domain.status.entity.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StatusRepository  extends JpaRepository<Status, Long> {
    Optional<Status> findByText(String text);
}