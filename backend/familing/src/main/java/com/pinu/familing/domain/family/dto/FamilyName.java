package com.pinu.familing.domain.family.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import jakarta.validation.constraints.NotBlank;

@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public record FamilyName(@NotBlank(message = "가족 이름을 설정해 주세요.") String familyName) {
}
