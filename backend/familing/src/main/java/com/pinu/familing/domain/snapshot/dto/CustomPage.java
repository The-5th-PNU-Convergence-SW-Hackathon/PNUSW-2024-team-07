package com.pinu.familing.domain.snapshot.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import org.springframework.data.domain.Page;

import java.util.List;

@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public record CustomPage(int totalPage,
                         List<?> content) {

    public CustomPage(Page<?> page) {
        this(page.getTotalPages(), page.getContent());
    }
}