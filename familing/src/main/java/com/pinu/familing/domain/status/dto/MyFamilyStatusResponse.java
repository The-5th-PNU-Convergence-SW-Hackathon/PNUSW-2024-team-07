package com.pinu.familing.domain.status.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.pinu.familing.domain.user.entity.User;

import java.util.List;
import java.util.stream.Collectors;

@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public record MyFamilyStatusResponse(UserStatusResponse me,
                                     List<UserStatusResponse> family) {

    public MyFamilyStatusResponse(User user) {
        this(
                new UserStatusResponse(user)
                ,user.getFamily().getUsers().stream()
                .filter(familyUser -> !familyUser.equals(user)) // user와 동일한 객체는 건너뜀
                .map(UserStatusResponse::new) // UserResponse로 변환
                .collect(Collectors.toList()) // List로 변환
        );
    }


    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    private record UserStatusResponse(String username,
                                     String nickname,
                                     String imageUrl,
                                     String status) {
        private UserStatusResponse(User user) {
            this(
                    user.getUsername(),
                    user.getNickname(),
                    user.getProfileImg(),
                    user.getStatus().getText()// status가 null인 경우 "EMPTY"로 설정
            );
        }
    }
}
