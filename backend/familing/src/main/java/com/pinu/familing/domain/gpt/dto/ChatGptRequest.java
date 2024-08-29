package com.pinu.familing.domain.gpt.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class ChatGptRequest {
    private String model;
    private List<GptRequestMessage> messages;

    public ChatGptRequest(String model, String message) {
        this.model = model;
        this.messages = new ArrayList<>();
        List<Object> list = List.of(new Prompt("text",message), new Prompt("text", " 위 메시지를 가족끼리 사용하는 애정 표현으로 만들어 줘"));
        this.messages.add(new GptRequestMessage("user", list));
    }
}
