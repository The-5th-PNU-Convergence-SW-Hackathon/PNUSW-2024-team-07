package com.pinu.familing.domain.snapshot.repository;

import com.pinu.familing.domain.snapshot.entity.SnapshotImage;
import com.pinu.familing.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Optional;


public interface SnapshotImageRepository extends JpaRepository<SnapshotImage, Long> {
    Optional<SnapshotImage> findByUserAndDate(User user, LocalDate day);
}
