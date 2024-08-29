package com.pinu.familing.domain.family.dto;

import com.pinu.familing.domain.family.entity.Family;
import lombok.Builder;

@Builder
public record MyFamilyDto(Long id,
                          String familyName,
                          String code,
                          FamilyUsersDto familyUsersDto) {

    public static MyFamilyDto toEntity(Family family) {
        return MyFamilyDto.builder()
                .id(family.getId())
                .familyName(family.getFamilyName())
                .code(family.getCode())
                .familyUsersDto(FamilyUsersDto.fromEntity(family.getUsers()))
                .build();
    }
}
