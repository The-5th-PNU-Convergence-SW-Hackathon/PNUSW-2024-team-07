package com.pinu.familing.domain.chat.entity;

import com.pinu.familing.domain.user.entity.User;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;

@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
//카프카로 전송되기 위한 직렬화된 메시지
public class Message implements Serializable {

    private String id;
    
    private Long chatRoomId;

    private Long chatId;

    @NotNull
    private String contentType;

    @NotNull
    private String content;

    private String senderUsername;

    private String senderNickname;

    private Long senderId;

    private long sendTime;

    public void setId(String id) {
        this.id = id;
    }

    public void setSendTimeAndSenderAndRoomId(LocalDateTime sendTime, User user) {
        this.senderUsername = user.getUsername();
        this.sendTime = sendTime.atZone(ZoneId.of("Asia/Seoul")).toInstant().toEpochMilli();
        this.senderId = user.getId();
        this.senderNickname = user.getNickname();
        this.chatRoomId = user.getChatRoom().getId();
    }

    public Chatting convertEntity() {
        return Chatting.builder()
                .senderUsername(senderUsername)
                .senderId(senderId)
                .chatRoomId(chatRoomId)
                .contentType(contentType)
                .content(content)
                .sendDate(Instant.ofEpochMilli(sendTime).atZone(ZoneId.of("Asia/Seoul")).toLocalDateTime())
                .build();
    }

}