package com.pinu.familing.domain.family.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

/*
 * 가족 그룹 생성을 언제 할까요?!
 */
@Entity
@Getter
@NoArgsConstructor
public class Family {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String familyName;

    @Column(nullable = false, unique = true)
    private String code;

    public Family(String familyName, String code) {
        this.familyName = familyName;
        this.code = code;
    }
}
