package com.pinu.familing.domain.user;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum Gender {
    MAN("남자"),
    GIRL("여자");

    private final String gender;

    @JsonValue
    public String getGender() {
        return gender;
    }
}


