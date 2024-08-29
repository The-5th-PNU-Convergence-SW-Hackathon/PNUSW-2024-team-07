package com.pinu.familing.global.s3;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.pinu.familing.global.error.CustomException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.UUID;

import static com.pinu.familing.global.error.ExceptionCode.IMAGE_NOT_FOUND;
import static com.pinu.familing.global.error.ExceptionCode.S3_IMAGE_NOT_FOUND;

@Slf4j
@RequiredArgsConstructor
@Service
public class AwsS3Service {

    @Value("${cloud.aws.s3.bucket}")
    private String bucketName;

    private final AmazonS3Client amazonS3Client;

    private final S3ImageRepository s3ImageRepository;

    /**
     * S3로 파일 업로드
     */
    @Transactional
    public S3ImgDto uploadFiles(MultipartFile multipartFile) {


        String originalFileName = multipartFile.getOriginalFilename();
        String uploadFileName = getUuidFileName(originalFileName);
        String uploadFileUrl = "";

        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentLength(multipartFile.getSize());
        objectMetadata.setContentType(multipartFile.getContentType());

        try (InputStream inputStream = multipartFile.getInputStream()) {

            String keyName = uploadFileName; //  년/월/일/파일.확장자

            // S3에 파일 업로드
            // 외부에서 읽을 수 있도록 하기 위해 withCannedAcl을 설정
            amazonS3Client.putObject(
                    new PutObjectRequest(bucketName, keyName, inputStream, objectMetadata)
                    .withCannedAcl(CannedAccessControlList.PublicRead));

            // S3 Url 반환
            uploadFileUrl = amazonS3Client.getUrl(bucketName, keyName).toString();

        } catch (IOException e) {
            e.printStackTrace();
            log.error("Filed upload failed", e);
        }
        S3Image savedS3Image = s3ImageRepository.save( S3Image.builder()
                .originalFileName(originalFileName)
                .uploadFileUrl(uploadFileUrl)
                .uploadFileName(uploadFileName)
                .build());

        return S3ImgDto.fromEntity(savedS3Image);
    }

    /**
     * S3에 업로드된 파일 삭제
     */
    @Transactional
    public boolean deleteFile(String uploadFileUrl) {

        S3Image s3Image = s3ImageRepository.findByUploadFileUrl(uploadFileUrl)
                .orElseThrow(() -> new CustomException(IMAGE_NOT_FOUND));
        try {
            String keyName = s3Image.getUploadFileName(); // ex) 구분/년/월/일/파일.확장자
            boolean isObjectExist = amazonS3Client.doesObjectExist(bucketName, keyName);
            if (isObjectExist) {
                amazonS3Client.deleteObject(bucketName, keyName);
                s3ImageRepository.delete(s3Image);
            } else {
                throw new CustomException(S3_IMAGE_NOT_FOUND);
            }
        } catch (Exception e) {
            log.debug("Delete File failed", e);
            return false;
        }

        return true;
    }

    /**
     * UUID 파일명 반환
     */
    private String getUuidFileName(String fileName) {
        String ext = fileName.substring(fileName.indexOf(".") + 1);
        return UUID.randomUUID().toString() + "." + ext;
    }

}