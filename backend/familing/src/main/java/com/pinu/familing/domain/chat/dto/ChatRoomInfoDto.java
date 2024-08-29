package com.pinu.familing.domain.chat.dto;

import lombok.Builder;

@Builder
public record ChatRoomInfoDto(
        Long chatRoomId
) {
}
