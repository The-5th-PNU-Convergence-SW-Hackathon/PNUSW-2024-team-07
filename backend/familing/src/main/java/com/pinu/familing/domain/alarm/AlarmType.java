package com.pinu.familing.domain.alarm;


import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum AlarmType {

    SNAPSHOT_SUBJECT("스냅샷 주제등록"),
    SNAPSHOT_REGISTER("스냅샷 등록"),
    LOVECARD_RECEIVE("애정카드 받음");


    private String value;
}
