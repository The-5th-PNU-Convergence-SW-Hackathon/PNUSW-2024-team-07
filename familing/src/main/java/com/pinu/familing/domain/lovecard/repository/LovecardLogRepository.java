package com.pinu.familing.domain.lovecard.repository;

import com.pinu.familing.domain.lovecard.entity.LovecardLog;
import com.pinu.familing.domain.user.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LovecardLogRepository extends JpaRepository<LovecardLog, Long> {
    Page<LovecardLog> findAllBySenderAndReceiver(User sender, User receiver, Pageable pageable);
}
