package com.pinu.familing.domain.alarm.entity;

import com.pinu.familing.domain.BaseEntity;
import com.pinu.familing.domain.alarm.AlarmType;
import com.pinu.familing.domain.user.entity.User;
import jakarta.persistence.*;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class Alarm extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Boolean isRead = false; // 기본 값은 false로 읽지 않은 상태이다.

    @ManyToOne
    @JoinColumn(name = "sender_id")
    private User sender;

    @ManyToOne
    @JoinColumn(name = "receiver_id")
    private User receiver;

    private String message;

    @Enumerated(EnumType.STRING)
    private AlarmType alarmType;

    private String AlarmImg;

    @Builder
    private Alarm(Boolean isRead, User sender, User receiver, String message, AlarmType alarmType, String alarmImg) {
        this.sender = sender;
        this.receiver = receiver;
        this.message = message;
        this.alarmType = alarmType;
        this.isRead = isRead != null ? isRead : false; // null일 경우 기본값으로 false 설정
        this.AlarmImg = alarmImg;
    }

    public void readAlarm() {
        this.isRead = true;
    }
}
