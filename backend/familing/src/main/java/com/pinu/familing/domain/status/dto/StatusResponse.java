package com.pinu.familing.domain.status.dto;

import com.pinu.familing.domain.status.entity.Status;

public record StatusResponse(Long id,
                             String text) {

    public StatusResponse(Status Status) {
        this(Status.getId(),Status.getText());
    }
}
