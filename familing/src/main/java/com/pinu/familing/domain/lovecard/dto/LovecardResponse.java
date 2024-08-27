package com.pinu.familing.domain.lovecard.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.pinu.familing.domain.lovecard.entity.Lovecard;

@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public record LovecardResponse(Long cardId,
                               String imageUrl) {

    public LovecardResponse(Lovecard lovecard) {
            this(lovecard.getId(),lovecard.getImage());
    }
}
