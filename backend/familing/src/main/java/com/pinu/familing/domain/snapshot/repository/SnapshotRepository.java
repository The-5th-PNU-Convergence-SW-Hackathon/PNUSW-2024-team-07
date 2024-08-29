package com.pinu.familing.domain.snapshot.repository;

import com.pinu.familing.domain.family.entity.Family;
import com.pinu.familing.domain.snapshot.entity.Snapshot;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Optional;

public interface SnapshotRepository extends JpaRepository<Snapshot, Long> {
    //스냡샷 샹성 로직 위치 고민으로 현재 사용하고 있지는 않지만 추후 사용 예정
    boolean existsByFamilyAndDate(Family family, LocalDate date);

    Optional<Snapshot> findByFamilyAndDate(Family family, LocalDate day);

    Page<Snapshot> findAllByFamilyAndDateLessThanEqual(Family family, LocalDate date, Pageable pageable);

}
