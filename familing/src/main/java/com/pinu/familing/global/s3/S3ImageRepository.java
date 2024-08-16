package com.pinu.familing.global.s3;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface S3ImageRepository extends JpaRepository<S3Image, Long> {

    Optional<S3Image> findByUploadFileUrl(String uploadFileUrl);
}
