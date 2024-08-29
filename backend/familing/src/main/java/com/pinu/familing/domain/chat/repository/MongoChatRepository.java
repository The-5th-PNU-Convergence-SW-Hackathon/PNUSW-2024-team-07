package com.pinu.familing.domain.chat.repository;

import com.pinu.familing.domain.chat.entity.Chatting;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MongoChatRepository extends MongoRepository<Chatting, String> {
    List<Chatting> findByChatRoomId(Long chatRoomId);
}
