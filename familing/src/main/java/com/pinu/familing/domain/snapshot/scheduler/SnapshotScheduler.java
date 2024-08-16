package com.pinu.familing.domain.snapshot.scheduler;

import com.pinu.familing.domain.family.entity.Family;
import com.pinu.familing.domain.family.repository.FamilyRepository;
import com.pinu.familing.domain.snapshot.service.SnapshotAlarmService;
import com.pinu.familing.domain.snapshot.service.SnapshotService;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Component
@RequiredArgsConstructor
public class SnapshotScheduler {

    private final FamilyRepository familyRepository;
    private final SnapshotAlarmService snapshotAlarmService;
    private final SnapshotService snapshotService;

    /*
        0: 초를 의미하며, 매 시간의 0초에 작업을 시작합니다.
        0: 분을 의미하며, 매 시간의 0분에 작업을 시작합니다.
        *: 시간 필드에 대한 설정으로, 모든 시간(즉, 하루의 모든 정각)에 실행하도록 설정합니다.
        *: 일자 필드로, 매일 실행됩니다.
        *: 월 필드로, 매달 실행됩니다.
        ?: 요일 필드로, 요일은 특정하지 않습니다.

        @Scheduled(cron = "0 0 0 * * ?") //매일 정각
        @Scheduled(cron = "0 0 1 * * ?") //매일 새벽 한시
     */


    // 매 분마다 실행
    @Scheduled(cron = "0 0 0 * * ?")
    public void createSnapshotAlarmChangeInBatches() {
        snapshotAlarmService.changeAllAlarmChangeRequest();
    }

    // 알람 보내기: 매 분마다 실행
    @Scheduled(cron = "0 * * * * ?")
    public void sendSnapshotAlarm() {
        // 현재 시간을 분 단위로 자름
        LocalTime currentTime = LocalTime.now().truncatedTo(ChronoUnit.MINUTES);
        LocalDate currentDate = LocalDate.now();
        // 모든 가족을 가져옴
        List<Family> families = familyRepository.findAllBySnapshotAlarmTime(currentTime);

        //엔티티 생성
        families.forEach((family) -> snapshotService.createFamilySnapshotEntity(family, currentDate));

        for (Family family : families) {
            System.out.println(family.getFamilyName() + ": 알람! ");
        }
    }


}
