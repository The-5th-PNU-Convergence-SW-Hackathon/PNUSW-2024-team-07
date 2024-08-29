package com.pinu.familing.domain.gpt.controller;


import com.pinu.familing.domain.gpt.dto.ChatGPTResponse;
import com.pinu.familing.domain.gpt.dto.ChatGptRequest;
import com.pinu.familing.domain.gpt.dto.GptRequestMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/v1/gpt")
@RequiredArgsConstructor
public class ChatGPTController {
    @Value("${openai.model}")
    private String model;

    @Value("${openai.api.url}")
    private String apiURL;

    @Autowired
    @Qualifier("GPTRestTemplate")
    private RestTemplate gptRestTemplate;


    @PostMapping("/chat")
    public String requestGpt(@RequestBody String message) {
        String responseContent = null;
        try {
            ChatGptRequest request = new ChatGptRequest(model, message);
            ChatGPTResponse chatGPTResponse = gptRestTemplate.postForObject(apiURL, request, ChatGPTResponse.class);
            responseContent = chatGPTResponse.getChoices().get(0).getMessage().getContent().toString();
        }
        catch (Exception e) {
            e.printStackTrace();
        }

        return responseContent;
    }


}
