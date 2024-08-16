package com.pinu.familing.domain;


//import com.pinu.familing.global.s3.AwsS3Service;
//import com.pinu.familing.global.s3.S3ImgDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
public class TestContoller {

//    private final AwsS3Service awsS3Service;

    @GetMapping("/my")
    public String test() {
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        System.out.println(name);
        return name;
    }

//    @PostMapping("img")
//    public S3ImgDto testImg(@RequestPart MultipartFile img) {
//        return awsS3Service.uploadFiles(img);
//    }
//    @DeleteMapping("img")
//    public String deleteImg(@RequestParam String url)
//    {
//        awsS3Service.deleteFile(url);
//                return "ok";
//    }
}
