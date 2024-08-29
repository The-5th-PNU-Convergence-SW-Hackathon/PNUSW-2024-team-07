package com.pinu.familing.domain.user.dto;


import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.pinu.familing.domain.user.entity.User;

@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public record UserResponse(String username,
                           String nickname,
                           String realname,
                           String imageUrl) {

    // User 엔티티를 UserResponse로 변환하는 static 함수
    public static UserResponse fromEntity(User user) {
        return new UserResponse(
                user.getUsername(),
                user.getNickname(),
                user.getRealname(),
                user.getProfileImg()
        );
    }
}
