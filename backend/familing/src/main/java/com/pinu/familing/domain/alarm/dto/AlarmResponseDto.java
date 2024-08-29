package com.pinu.familing.domain.alarm.dto;

import lombok.Builder;

import java.util.List;

@Builder
public record AlarmResponseDto(
        List<AlarmDto> read,
        List<AlarmDto> unread,
        List<AlarmDto> yesterday,
        List<AlarmDto> sevenday
) {
}