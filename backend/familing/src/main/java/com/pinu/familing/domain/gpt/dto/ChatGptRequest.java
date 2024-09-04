package com.pinu.familing.domain.gpt.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class ChatGptRequest {
    private String model;
    private List<GptRequestMessage> messages;
    private double temperature;
    private int max_tokens;
    private double top_p;
    private double frequency_penalty;
    private double presence_penalty;

    public ChatGptRequest(String model, String message) {
        this.model = model;
        this.messages = new ArrayList<>();
        this.temperature = 1.0;
        this.max_tokens = 40;
        this.top_p = 1.0;
        this.frequency_penalty = 0.0;
        this.presence_penalty = 0.0;

        List<Object> list = List.of(new Prompt("text",message), new Prompt("text", " 위 메시지를 애정을 담아 리팩터링해 줘 응답은 문자열로 해줘"));
        this.messages.add(new GptRequestMessage("user", list));

    }
}
