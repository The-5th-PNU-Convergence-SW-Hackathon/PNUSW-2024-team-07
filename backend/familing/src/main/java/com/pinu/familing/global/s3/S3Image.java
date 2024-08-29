package com.pinu.familing.global.s3;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class S3Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String originalFileName;
    @Column(unique = true)
    private String uploadFileName;
    @Column(unique = true)
    private String uploadFileUrl;

    @Builder
    private S3Image(String originalFileName, String uploadFileName, String uploadFileUrl) {
        this.originalFileName = originalFileName;
        this.uploadFileName = uploadFileName;
        this.uploadFileUrl = uploadFileUrl;
    }
}
