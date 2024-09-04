package com.pinu.familing.domain.chat.dto;

import com.pinu.familing.domain.chat.entity.Chatting;

import java.time.ZoneId;

public record ChatResponseDto(
        String id,
        Long chatRoomId,
        Long senderId,
        String senderUsername,
        String contentType,
        String content,
        String senderProfileImg,
        long sendDate,
        boolean isMine
) {
    public ChatResponseDto(Chatting chatting, Long userId) {
        this(
                chatting.getId(),
                chatting.getChatRoomId(),
                chatting.getSenderId(),
                chatting.getSenderUsername(),
                chatting.getContentType(),
                chatting.getContent(),
                chatting.getSenderProfileImg(),
                chatting.getSendDate().atZone(ZoneId.of("Asia/Seoul")).toInstant().toEpochMilli(),
                chatting.getSenderId().equals(userId)
        );
    }

}