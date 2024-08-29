package com.pinu.familing.domain.snapshot.controller;

import com.pinu.familing.domain.snapshot.dto.CustomPage;
import com.pinu.familing.domain.snapshot.dto.SnapshotImageRequest;
import com.pinu.familing.domain.snapshot.dto.SnapshotResponse;
import com.pinu.familing.domain.snapshot.service.SnapshotService;
import com.pinu.familing.global.error.CustomException;
import com.pinu.familing.global.error.ExceptionCode;
import com.pinu.familing.global.oauth.dto.CustomOAuth2User;
import com.pinu.familing.global.oauth.dto.PrincipalDetails;
import com.pinu.familing.global.util.ApiUtils;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.beans.PropertyEditorSupport;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

import static com.pinu.familing.global.error.ExceptionCode.REQUIRE_IMG;

@RestController
@RequestMapping("/api/v1/snapshots")
@RequiredArgsConstructor
public class SnapshotController {

    private final SnapshotService snapshotService;


    // 특정 날짜 스냅샷 조회
    @GetMapping("/{day}")
    public ApiUtils.ApiResult<?> getSnapshotByDate(@PathVariable("day") LocalDate day,
                                                 @AuthenticationPrincipal PrincipalDetails principalDetails) {
        SnapshotResponse snapshot = snapshotService.getSnapshotByDate(day, principalDetails.getUsername());
        return ApiUtils.success(snapshot);
    }

    //스냅샷 페이지 조회
    @GetMapping(value = "/{day}", params = "page")
    public ApiUtils.ApiResult<?> getSnapshotPage(@PathVariable("day") LocalDate day, Pageable pageable,
                                                @AuthenticationPrincipal PrincipalDetails principalDetails) {
        Page<SnapshotResponse> snapshotPage = snapshotService.getSnapshotPage(day, pageable, principalDetails.getUsername());
        return ApiUtils.success(new CustomPage(snapshotPage));
    }

    //스냅샷 이미지 등록
    @PostMapping("/{day}/users")
    public ApiUtils.ApiResult<?> registerSnapshotImage(@PathVariable("day") LocalDate day,
                                                       @AuthenticationPrincipal PrincipalDetails principalDetails,
                                                       @RequestPart("snapshot_img") MultipartFile snapshotImage) {
        if (snapshotImage.isEmpty()) {
            throw new CustomException(REQUIRE_IMG);
        }
        snapshotService.registerSnapshotImage(day, principalDetails.getUsername(), snapshotImage);
        return ApiUtils.success("Image has been registered successfully.");
    }


    // 스냅샷 알람 변경 요청 저장하기
    @PostMapping("/alarm")
    public ApiUtils.ApiResult<?> setSnapshotAlarmTime(@AuthenticationPrincipal PrincipalDetails principalDetails,
                                                      @RequestParam(name = "time") String time) {
        LocalTime targetTime = LocalTime.parse(time);
        snapshotService.changeAlarmTime(principalDetails.getUsername(), targetTime);
        return ApiUtils.success("Snapshot alarm has been converted successfully.");
    }


    // 스냅샷 알람 조회
    @GetMapping("/alarm")
    public ApiUtils.ApiResult<?> getSnapshotAlarmTime(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");
        return ApiUtils.success(snapshotService.getSnapshotAlarmTime(principalDetails.getUsername()).format(formatter));
    }


    @InitBinder
    public void initBinder(WebDataBinder binder) {
        //LocalDate 타입의 필드에대해서만 변환
        binder.registerCustomEditor(LocalDate.class, new PropertyEditorSupport() {

            @Override
            public void setAsText(String text) {
                try {
                    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
                    LocalDate date = LocalDate.parse(text, formatter);
                    setValue(date);
                } catch (DateTimeParseException e) {
                    // Handle invalid date format
                    throw new CustomException(ExceptionCode.DAY_BAD_REQUEST);
                }
            }
        });
    }


}
