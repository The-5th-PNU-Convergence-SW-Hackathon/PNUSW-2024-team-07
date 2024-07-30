package com.pinu.familing.global.util;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

public class ApiUtils {

    public static <T> ApiResult<T> success(T result) {
        return new ApiResult<>(true, HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), result);
    }

    public static <T> ApiResult<T> create(T result) {
        return new ApiResult<>(true, HttpStatus.CREATED.value(), HttpStatus.CREATED.getReasonPhrase(), result);
    }

    public static ApiResult<?> error(String message, HttpStatus httpStatus) {
        return new ApiResult<>(false, httpStatus.value(),  message, null);
    }


    @Getter
    @Setter
    @AllArgsConstructor
    public static class ApiResult<T> {
        private final boolean success;
        private final int code;
        private final String message;
        private final T result;
    }
}