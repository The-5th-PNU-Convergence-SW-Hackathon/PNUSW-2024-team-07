package com.pinu.familing.domain.chat.repository;

import com.pinu.familing.domain.chat.entity.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ChatRoomRepository extends JpaRepository<ChatRoom, Long> {
    Optional<ChatRoom> findByValidCode(String validCode);
}
