package com.pinu.familing.domain.family.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.pinu.familing.domain.user.entity.User;

import java.util.List;
import java.util.stream.Collectors;

@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public record FamilyUsersDto(
    List<FamilyUserDto> familyUserDtoList
) {

    public static FamilyUsersDto fromEntity(List<User> users){
        return new FamilyUsersDto(users.stream()
                .map(user -> new FamilyUserDto(user.getNickname(), user.getProfileImg(), user.getUsername()))
                .toList());
    }
}
