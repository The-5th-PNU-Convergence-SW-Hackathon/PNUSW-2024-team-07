package com.pinu.familing.global.error;


import com.pinu.familing.global.util.ApiUtils;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
@ResponseBody
public class GlobalExceptionHandler {

    @ExceptionHandler(CustomException.class)
    public ApiUtils.ApiResult<?> handleCustomException(CustomException e) {

        return ApiUtils.error(e.getMessage(), e.getExceptionCode().getHttpStatus());
    }

    @ExceptionHandler(Exception.class)
    public ApiUtils.ApiResult<?> unknownServerError(Exception e) {
        String message = extractDesiredMessage(e.getMessage());

        return ApiUtils.error(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ApiUtils.ApiResult<?> handleValidationExceptions(MethodArgumentNotValidException e) {
        BindingResult result = e.getBindingResult();
        String errorMessage = result.getFieldError().getDefaultMessage();
        return ApiUtils.error(errorMessage, HttpStatus.BAD_REQUEST);
    }

    // 메시지에서 원하는 부분만 노출 되도록 처리
    private String extractDesiredMessage(String fullMessage) {
        if (fullMessage != null && fullMessage.contains("Required request body is missing")) {
            return "Required request body is missing.";
        }
        return fullMessage;
    }
}