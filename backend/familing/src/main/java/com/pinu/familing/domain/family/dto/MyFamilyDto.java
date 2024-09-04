package com.pinu.familing.domain.family.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.pinu.familing.domain.family.entity.Family;
import com.pinu.familing.domain.user.entity.User;
import lombok.Builder;

import java.util.List;
import java.util.stream.Collectors;

@Builder
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public record MyFamilyDto(Long id,
                          String familyName,
                          String code,
                          FamilyUsersDto me,
                          FamilyUsersDto familyUsersDto) {

    public static MyFamilyDto toEntity(User user, Family family) {
        List<User> myFaily = family.getUsers().stream()
                .filter(u -> !u.equals(user))
                .collect(Collectors.toList());

        return MyFamilyDto.builder()
                .id(family.getId())
                .familyName(family.getFamilyName())
                .code(family.getCode())
                .me(FamilyUsersDto.fromEntity(List.of(user)))
                // 필터링된 리스트가 비어있지 않을 때만 실행
                .familyUsersDto(!myFaily.isEmpty() ? FamilyUsersDto.fromEntity(myFaily) : null)
                .build();
    }
}
