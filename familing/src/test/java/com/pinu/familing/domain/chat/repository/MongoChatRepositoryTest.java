package com.pinu.familing.domain.chat.repository;

import com.pinu.familing.IntegrationTestSupport;
import com.pinu.familing.domain.chat.entity.Chatting;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

class MongoChatRepositoryTest extends IntegrationTestSupport {

    @Autowired
    private MongoChatRepository mongoChatRepository;

    @AfterEach
    void tearDown() {
        mongoChatRepository.deleteAll();
    }

    @DisplayName("특정 채팅방 ID로 채팅 메시지를 조회한다.")
    @Test
    void findByChatRoomId() {
        // given
        Long chatRoomId = 1L;
        Chatting chat1 = createChatting(chatRoomId, 1L, "사용자1", "text", "안녕하세요!");
        Chatting chat2 = createChatting(chatRoomId, 2L, "사용자2", "text", "반갑습니다!");
        Chatting chat3 = createChatting(2L, 3L, "사용자3", "text", "다른 채팅방 메시지");

        mongoChatRepository.saveAll(List.of(chat1, chat2, chat3));

        // when
        List<Chatting> chatList = mongoChatRepository.findByChatRoomId(chatRoomId);

        // then
        assertThat(chatList).hasSize(2)
                .extracting("content")
                .containsExactly("안녕하세요!", "반갑습니다!");
    }

    private Chatting createChatting(Long chatRoomId, Long senderId, String senderUsername, String contentType, String content) {
        return Chatting.builder()
                .chatRoomId(chatRoomId)
                .senderId(senderId)
                .senderUsername(senderUsername)
                .contentType(contentType)
                .content(content)
                .sendDate(LocalDateTime.now())
                .build();
    }
}