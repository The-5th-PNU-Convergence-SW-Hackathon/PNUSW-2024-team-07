package com.pinu.familing.domain.family.dto;

import com.pinu.familing.domain.user.entity.User;

import java.util.List;
import java.util.stream.Collectors;

public record FamilyUsersDto(
    List<FamilyUserDto> familyUserDtoList
) {

    public static FamilyUsersDto fromEntity(List<User> users){
        return new FamilyUsersDto(users.stream()
                .map(user -> new FamilyUserDto(user.getNickname(), user.getImageUrl()))
                .toList());
    }
}
