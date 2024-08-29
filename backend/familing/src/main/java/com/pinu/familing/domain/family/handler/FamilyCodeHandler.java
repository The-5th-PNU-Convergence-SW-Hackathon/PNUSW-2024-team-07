package com.pinu.familing.domain.family.handler;

import com.pinu.familing.global.error.CustomException;
import com.pinu.familing.global.error.ExceptionCode;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class FamilyCodeHandler {

    private static final char[] BASE_62_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".toCharArray();

    public static String createCode(String name) {
        StringBuilder sb = new StringBuilder();

        // SHA-256 해시 함수를 사용하여 입력값을 해시
        MessageDigest md;
        try {
            md = MessageDigest.getInstance("SHA-256");
        } catch (NoSuchAlgorithmException e) {
            throw new CustomException(ExceptionCode.FAILED_CODE_GENERATION);
        }
        byte[] hash = md.digest(name.getBytes());

        // 해시 값을 Base62로 인코딩
        for (byte b : hash) {
            sb.append(BASE_62_CHARS[((b & 0xFF) % BASE_62_CHARS.length)]);
        }

        //길이 12으로 제한
        return sb.substring(0, 12);
    }
}
