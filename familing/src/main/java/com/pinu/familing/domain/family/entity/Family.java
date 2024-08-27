package com.pinu.familing.domain.family.entity;

import com.pinu.familing.domain.user.entity.User;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

import java.time.LocalTime;

/*
 * 가족 그룹 생성을 언제 할까요?!
 */
@Builder
@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Family {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String familyName;

    @Column(nullable = false, unique = true)
    private String code;


    private int membersNum;

    @Builder.Default
    private LocalTime snapshotAlarmTime=LocalTime.of(12, 0);

    public Family(String familyName, String code) {
        this.familyName = familyName;
        this.code = code;
        this.membersNum = 0;
        this.snapshotAlarmTime = LocalTime.of(12, 0);
    }

    public void changeSnapshotAlarmTime(LocalTime time) {
        this.snapshotAlarmTime = time;
    }

    public void addMember() {
        this.membersNum += 1;
    }
    @Builder.Default
    @OneToMany(mappedBy = "family")
    private List<User> users = new ArrayList<>();

}
