package com.pinu.familing.domain.chat.entity;

import com.pinu.familing.domain.user.entity.User;
import com.pinu.familing.domain.user.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;

import static org.assertj.core.api.Assertions.assertThat;

class MessageTest {

    private Message message;
    private User user;
    private UserService userService;

    @BeforeEach
    void setUp() {
        message = new Message();
        user = User.builder()
                .username("testUser")
                .nickname("testNickname")
                .build();
        ChatRoom chatRoom = new ChatRoom();
        user.registerChatRoom(chatRoom);
    }

    @DisplayName("setSendTimeAndSenderAndRoomId 메서드가 ID값을 제외한 sender 정보를 올바르게 설정한다.")
    @Test
    void testSetSendTimeAndSenderAndRoomId() {
        // given
        LocalDateTime sendTime = LocalDateTime.now(ZoneId.of("Asia/Seoul"));

        // when
        message.setSendTimeAndSenderAndRoomId(sendTime, user);

        // then
        assertThat(message.getSenderUsername()).isEqualTo("testUser");
        assertThat(message.getSenderNickname()).isEqualTo("testNickname");
        assertThat(message.getSendTime()).isEqualTo(sendTime.atZone(ZoneId.of("Asia/Seoul")).toInstant().toEpochMilli());
    }

    @DisplayName("convertEntity 메서드가 Chatting 엔티티를 올바르게 변환한다.")
    @Test
    void testConvertEntity() {
        // given
        Message message = Message.builder()
                .senderUsername("testUser")
                .senderId(1L)
                .chatRoomId(1L)
                .contentType("text")
                .content("Hello, world!")
                .sendTime(Instant.now().toEpochMilli())
                .build();

        // when
        Chatting chatting = message.convertEntity();

        // then
        assertThat(chatting.getSenderUsername()).isEqualTo("testUser");
        assertThat(chatting.getSenderId()).isEqualTo(1L);
        assertThat(chatting.getChatRoomId()).isEqualTo(1L);
        assertThat(chatting.getContentType()).isEqualTo("text");
        assertThat(chatting.getContent()).isEqualTo("Hello, world!");
        assertThat(chatting.getSendDate()).isNotNull();
    }

    @DisplayName("Message 객체의 필드가 올바르게 설정된다.")
    @Test
    void testMessageFields() {
        // given
        String id = "msg1";
        Long chatRoomId = 1L;
        Long chatId = 1L;
        String contentType = "text";
        String content = "Hello";
        String senderUsername = "testUser";
        String senderNickname = "testNickname";
        Long senderId = 1L;
        long sendTime = Instant.now().toEpochMilli();

        // when
        Message message = Message.builder()
                .id(id)
                .chatRoomId(chatRoomId)
                .chatId(chatId)
                .contentType(contentType)
                .content(content)
                .senderUsername(senderUsername)
                .senderNickname(senderNickname)
                .senderId(senderId)
                .sendTime(sendTime)
                .build();

        // then
        assertThat(message.getId()).isEqualTo(id);
        assertThat(message.getChatRoomId()).isEqualTo(chatRoomId);
        assertThat(message.getChatId()).isEqualTo(chatId);
        assertThat(message.getContentType()).isEqualTo(contentType);
        assertThat(message.getContent()).isEqualTo(content);
        assertThat(message.getSenderUsername()).isEqualTo(senderUsername);
        assertThat(message.getSenderNickname()).isEqualTo(senderNickname);
        assertThat(message.getSenderId()).isEqualTo(senderId);
        assertThat(message.getSendTime()).isEqualTo(sendTime);
    }
}