package com.pinu.familing.domain.snapshot.entity;

import com.pinu.familing.domain.BaseEntity;
import com.pinu.familing.domain.family.entity.Family;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@NoArgsConstructor // 기본 생성자를 protected로 설정
@AllArgsConstructor
public class Snapshot extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "family_id")
    private Family family;

    @ManyToOne
    @JoinColumn(name = "title_id")
    private SnapshotTitle snapshotTitle;

    private LocalDate date;

    @Builder.Default
    @OneToMany(orphanRemoval = true, mappedBy = "snapshot", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<SnapshotImage> snapshotImages = new ArrayList<>();

}
