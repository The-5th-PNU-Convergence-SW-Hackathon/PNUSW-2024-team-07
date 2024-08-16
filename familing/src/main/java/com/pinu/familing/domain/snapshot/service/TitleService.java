package com.pinu.familing.domain.snapshot.service;

import com.pinu.familing.domain.snapshot.entity.SnapshotTitle;
import com.pinu.familing.domain.snapshot.repository.SnapshotTitleRepository;
import com.pinu.familing.global.error.CustomException;
import com.pinu.familing.global.error.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class TitleService {

    private final SnapshotTitleRepository snapshotTitleRepository;

    public SnapshotTitle getTitle(LocalDate day) {
        long dayRemainder = (long) day.getDayOfMonth() % 10 + 1L;
        return snapshotTitleRepository.findById(dayRemainder)
                .orElseThrow(() -> new CustomException(ExceptionCode.SNAPSHOT_TITLE_NOT_FOUND));
    }
}
