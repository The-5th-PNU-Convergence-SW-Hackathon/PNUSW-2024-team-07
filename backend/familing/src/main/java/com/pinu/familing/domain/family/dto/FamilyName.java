package com.pinu.familing.domain.family.dto;

import jakarta.validation.constraints.NotNull;

public record FamilyName(@NotNull(message = "가족 이름을 설정해 주세요.") String name) {
}
