package com.pinu.familing.global.s3;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Builder
public class S3ImgDto {

    private String originalFileName;
    private String uploadFileName;
    private String uploadFileUrl;

    public static S3ImgDto fromEntity(S3Image s3Image) {
        return S3ImgDto.builder()
                .originalFileName(s3Image.getOriginalFileName())
                .uploadFileName(s3Image.getUploadFileName())
                .uploadFileUrl(s3Image.getUploadFileUrl())
                .build();
    }
}