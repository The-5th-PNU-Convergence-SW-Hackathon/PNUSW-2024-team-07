package com.pinu.familing.domain.alarm.service;

import com.pinu.familing.domain.alarm.AlarmType;
import com.pinu.familing.domain.alarm.dto.AlarmDto;
import com.pinu.familing.domain.alarm.dto.AlarmResponseDto;
import com.pinu.familing.domain.alarm.entity.Alarm;
import com.pinu.familing.domain.alarm.repository.AlarmRepository;
import com.pinu.familing.domain.user.entity.User;
import com.pinu.familing.domain.user.repository.UserRepository;
import com.pinu.familing.global.error.CustomException;
import com.pinu.familing.global.error.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import static com.pinu.familing.global.error.ExceptionCode.USER_NOT_FOUND;

@Service
@RequiredArgsConstructor
public class AlarmService {

    private final AlarmRepository alarmRepository;
    private final UserRepository userRepository;

    @Transactional
    public void sendAlarm(User sender, User receiver, AlarmType alarmType) {

        String message = "";
        String alarmImg = "";

        if (alarmType == AlarmType.LOVECARD_RECEIVE) {
            message = sender.getNickname() + "님이 애정카드를 보냈어요.";
            alarmImg = sender.getProfileImg();
        }
        else if (alarmType == AlarmType.SNAPSHOT_REGISTER) {
            message = sender.getNickname() + "님이 SnapShot에 사진을 등록했어요.";
            alarmImg = sender.getProfileImg();
        }
        else if (alarmType == AlarmType.SNAPSHOT_SUBJECT) {
            message = "Snap Shot의 주제 등록되었어요.";
            alarmImg = "";
        }

        alarmRepository.save(Alarm.builder()
                .sender(sender)
                .message(message)
                .receiver(receiver)
                .alarmType(alarmType)
                .alarmImg(alarmImg)
                .build());
    }

    @Transactional
    public AlarmResponseDto loadAlarm(String username){
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
        List<Alarm> byReceiverAndIsReadFalse = alarmRepository.findByReceiverAndIsReadFalse(user);
        List<Alarm> byReceiverAndIsReadTrue = alarmRepository.findByReceiverAndIsReadTrue(user);
        // 현재 시간
        LocalDateTime now = LocalDateTime.now();

        // 24시간 전의 시간 계산
        LocalDateTime oneDayAgo = now.minusHours(24);
        // 7일 전 시간 계산
        LocalDateTime sevenDaysAgo = now.minusDays(7);

        List<Alarm> alarmsWithin24Hours = alarmRepository.findReadAlarmsWithin24Hours(user, oneDayAgo);

        // 메서드 호출하여 24시간 이상 7일 이내의 알람 조회
        List<Alarm> alarmsBetween24HoursAnd7Days = alarmRepository.findReadAlarmsBetween24HoursAnd7Days(user, sevenDaysAgo, oneDayAgo);

        AlarmResponseDto alarmResponseDto = AlarmResponseDto.builder()
                .read(byReceiverAndIsReadTrue.stream()
                        .map(AlarmDto::fromEntity)
                        .collect(Collectors.toList()))
                .unread(byReceiverAndIsReadFalse.stream()
                        .map(AlarmDto::fromEntity)
                        .collect(Collectors.toList()))
                .yesterday(alarmsWithin24Hours.stream()
                        .map(AlarmDto::fromEntity)
                        .collect(Collectors.toList()))
                .sevenday(alarmsBetween24HoursAnd7Days.stream()
                        .map(AlarmDto::fromEntity)
                        .collect(Collectors.toList()))
                .build();
        // 조회한 알림 읽음으로 처리
        byReceiverAndIsReadFalse.forEach(alarm -> {
            alarm.readAlarm();
            alarmRepository.save(alarm);  // 변경된 상태를 저장하기 위해 필요
        });
        return alarmResponseDto;
    }
}
