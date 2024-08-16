package com.pinu.familing.domain.snapshot.repository;

import com.pinu.familing.domain.family.entity.Family;
import com.pinu.familing.domain.snapshot.entity.SnapshotAlarmChange;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SnapshotAlarmChangeRepository extends JpaRepository<SnapshotAlarmChange, Long> {
    boolean existsByFamily(Family family);

    Optional<SnapshotAlarmChange> findByFamily(Family family);
}
