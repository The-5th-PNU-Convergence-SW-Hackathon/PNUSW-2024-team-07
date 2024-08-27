package com.pinu.familing.domain.snapshot.service;

import com.pinu.familing.domain.family.entity.Family;
import com.pinu.familing.domain.family.repository.FamilyRepository;
import com.pinu.familing.domain.snapshot.dto.SnapshotImageRequest;
import com.pinu.familing.domain.snapshot.dto.SnapshotResponse;
import com.pinu.familing.domain.snapshot.entity.Snapshot;
import com.pinu.familing.domain.snapshot.entity.SnapshotImage;
import com.pinu.familing.domain.snapshot.repository.SnapshotImageRepository;
import com.pinu.familing.domain.snapshot.repository.SnapshotRepository;
import com.pinu.familing.domain.user.entity.User;
import com.pinu.familing.domain.user.repository.UserRepository;
import com.pinu.familing.global.error.CustomException;
import com.pinu.familing.global.error.ExceptionCode;
import com.pinu.familing.global.s3.AwsS3Service;
import com.pinu.familing.global.s3.S3ImgDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.LocalTime;

@Service
@RequiredArgsConstructor
public class SnapshotService {

    private final SnapshotImageRepository snapshotImageRepository;
    private final SnapshotRepository snapshotRepository;
    private final UserRepository userRepository;
    private final TitleService titleService;
    private final AwsS3Service awsS3Service;


    // 스냅샷에 이미지 등록하기 (스냅샷 이미지가 없으면 생성)
    @Transactional
    public void registerSnapshotImage(LocalDate day, String username, MultipartFile requestSnapshotImg) {
        User user = getUser(username);
        Snapshot snapshot = snapshotRepository.findByFamilyAndDate(user.getFamily(), day)
                .orElseGet(() -> createSnapshotFamily(user.getFamily(), day));

        S3ImgDto s3ImgDto = awsS3Service.uploadFiles(requestSnapshotImg);
        SnapshotImage snapshotImage = snapshotImageRepository.findByUserAndDate(user, day)
                .orElseGet(() -> createSnapshotImage(snapshot, user, day));

        snapshotImage.updateImage(s3ImgDto.getUploadFileUrl());
    }

    // 스냅샷 페이지 조회
    @Transactional(readOnly = true)
    public Page<SnapshotResponse> getSnapshotPage(LocalDate day, Pageable pageable, String username) {
        Family family = getFamily(username);
        return snapshotRepository.findAllByFamilyAndDateLessThanEqual(family, day, pageable)
                .map(snapshot -> new SnapshotResponse(username,snapshot));
    }

    // 특정 날짜 스냅샷 조회 (스냅샷이 없으면 생성하고, 가족 구성원 모두의 스냅샷 이미지 생성)
    @Transactional
    public SnapshotResponse getSnapshotByDate(LocalDate date, String username) {
        Family family = getFamily(username);
        Snapshot snapshot = snapshotRepository.findByFamilyAndDate(family, date)
                .orElseGet(() -> createSnapshotFamily(family, date));
        return new SnapshotResponse(username,snapshot);
    }

    // 스냅샷 엔티티 생성하기
    private Snapshot createSnapshotFamily(Family family, LocalDate date) {
        Snapshot snapshot = snapshotRepository.findByFamilyAndDate(family, date)
                .orElseGet(() -> snapshotRepository.save(
                        Snapshot.builder()
                                .snapshotTitle(titleService.getTitle(date))
                                .family(family)
                                .date(date)
                                .build()));


        family.getUsers().forEach(user -> createSnapshotImage(snapshot, user, date));

        return snapshot;
    }

    private SnapshotImage createSnapshotImage(Snapshot snapshot, User user, LocalDate date) {
        SnapshotImage snapshotImage =  snapshotImageRepository.findByUserAndDate(user, date)
                .orElseGet(() -> snapshotImageRepository.save(
                        SnapshotImage.builder()
                                .user(user)
                                .snapshot(snapshot)
                                .date(date)
                                .snapshotImg("EMPTY")
                                .build())
                );

        snapshot.addSnapshotImage(snapshotImage);
        return snapshotImage;
    }

    public LocalTime getSnapshotAlarmTime(String name) {
        return getFamily(name).getSnapshotAlarmTime();
    }


    @Transactional
    public void changeAlarmTime(String name, LocalTime targetTime) {
        getFamily(name).changeSnapshotAlarmTime(targetTime);
    }


    //유저 값 가져오기
    private Family getFamily(String username) {
        return getUser(username).getFamily();
    }

    private User getUser(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(ExceptionCode.USER_NOT_FOUND));
    }

}

