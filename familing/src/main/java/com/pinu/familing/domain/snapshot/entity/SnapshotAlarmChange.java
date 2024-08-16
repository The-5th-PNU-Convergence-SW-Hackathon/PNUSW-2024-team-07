package com.pinu.familing.domain.snapshot.entity;

import com.pinu.familing.domain.family.entity.Family;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Entity
@Getter
@NoArgsConstructor
public class SnapshotAlarmChange {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "family_id", unique = true)
    private Family family;

    private LocalTime timeToChange;

    public SnapshotAlarmChange(Family family, LocalTime timeToChange) {
        this.family = family;
        this.timeToChange = timeToChange;
    }

    public void updateTime(LocalTime targetTime) {
        this.timeToChange = targetTime;
    }
}
