package com.pinu.familing.domain.family.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.pinu.familing.domain.family.entity.Family;

@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public record FamilyDto(Long id,
                        String familyName,
                        String code) {

    public static FamilyDto fromEntity(Family family) {
        return new FamilyDto(family.getId(), family.getFamilyName(), family.getCode());
    }
}
