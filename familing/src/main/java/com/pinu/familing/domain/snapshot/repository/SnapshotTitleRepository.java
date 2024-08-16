package com.pinu.familing.domain.snapshot.repository;

import com.pinu.familing.domain.snapshot.entity.SnapshotTitle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SnapshotTitleRepository extends JpaRepository<SnapshotTitle, Long> {
}
