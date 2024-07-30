package com.pinu.familing.domain.chat.dto;

import lombok.Builder;

import java.util.List;

@Builder
public record ChattingHistoryResponseDto(
        String nickName,
        List<ChatResponseDto> chatList
) {}