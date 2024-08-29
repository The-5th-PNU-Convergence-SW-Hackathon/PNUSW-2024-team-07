package com.pinu.familing.domain.chat.entity;

import jakarta.persistence.Id;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "chatting")
@Getter
@ToString
@Setter
@AllArgsConstructor
@Builder
@NoArgsConstructor
// MongoDB Chatting 모델
public class Chatting {

    @Id
    private String id;
    private Long chatRoomId;
    private Long senderId;
    private String senderUsername;
    private String contentType;
    private String content;
    private LocalDateTime sendDate;

}