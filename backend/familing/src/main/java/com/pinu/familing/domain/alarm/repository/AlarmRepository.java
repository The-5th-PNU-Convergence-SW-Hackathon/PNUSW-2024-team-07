package com.pinu.familing.domain.alarm.repository;

import com.pinu.familing.domain.alarm.entity.Alarm;
import com.pinu.familing.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface AlarmRepository extends JpaRepository<Alarm, Long> {
    // 특정 수신자와 읽지 않은 상태의 알람 목록을 조회하는 메서드
    List<Alarm> findByReceiverAndIsReadFalse(User receiver);
    List<Alarm> findByReceiverAndIsReadTrue(User receiver);

    // isRead가 true이고, 24시간 이내에 생성된 알람을 조회
    @Query("SELECT a FROM Alarm a WHERE a.receiver = :receiver AND a.isRead = true AND a.createDateTime >= :since")
    List<Alarm> findReadAlarmsWithin24Hours(@Param("receiver") User receiver, @Param("since") LocalDateTime since);

    // isRead가 true이고, 24시간 이상 7일 이내에 생성된 알람을 조회
    @Query("SELECT a FROM Alarm a WHERE a.receiver = :receiver AND a.isRead = true AND a.createDateTime < :until AND a.createDateTime >= :since")
    List<Alarm> findReadAlarmsBetween24HoursAnd7Days(@Param("receiver") User receiver, @Param("since") LocalDateTime since, @Param("until") LocalDateTime until);

}
