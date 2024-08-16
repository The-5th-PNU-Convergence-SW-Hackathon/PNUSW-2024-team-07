package com.pinu.familing.domain.snapshot.dto;

import com.pinu.familing.domain.snapshot.entity.Snapshot;
import com.pinu.familing.domain.snapshot.entity.SnapshotImage;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

public record SnapshotResponse(String Title,
                               LocalDate date,
                               List<IndividualSnapshotImage> individualSnapshotImages) {

    public SnapshotResponse(Snapshot snapshot) {
        this(
                snapshot.getSnapshotTitle().getTitle(),
                snapshot.getDate(),
                snapshot.getSnapshotImages().stream()
                        .map(IndividualSnapshotImage::new)
                        .collect(Collectors.toList())
        );
    }

    record IndividualSnapshotImage(String username,
                                   String nickname,
                                   String profile,
                                   String image) {

        public IndividualSnapshotImage(SnapshotImage snapshotImage) {
            this(snapshotImage.getUser().getUsername(), snapshotImage.getUser().getNickname(), snapshotImage.getUser().getImageUrl(), snapshotImage.getImageUrl());
        }
    }


}

