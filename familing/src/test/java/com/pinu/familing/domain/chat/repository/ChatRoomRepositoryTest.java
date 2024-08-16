package com.pinu.familing.domain.chat.repository;

import com.pinu.familing.IntegrationTestSupport;
import com.pinu.familing.domain.chat.entity.ChatRoom;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

class ChatRoomRepositoryTest extends IntegrationTestSupport {

    @Autowired
    private ChatRoomRepository chatRoomRepository;

    @AfterEach
    void tearDown() {
        chatRoomRepository.deleteAllInBatch();
    }

    @DisplayName("유효한 코드로 채팅방을 조회한다.")
    @Test
    void findByValidCode() {
        // given
        String validCode = "uniqueCode123";
        ChatRoom chatRoom = createChatRoom(validCode);
        chatRoomRepository.save(chatRoom);

        // when
        Optional<ChatRoom> foundChatRoom = chatRoomRepository.findByValidCode(validCode);

        // then
        assertThat(foundChatRoom).isPresent();
        assertThat(foundChatRoom.get().getValidCode()).isEqualTo(validCode);
    }

    @DisplayName("유효하지 않은 코드로 채팅방을 조회할 때 빈 결과를 반환한다.")
    @Test
    void findByInvalidValidCode() {
        // given
        String validCode = "uniqueCode123";
        ChatRoom chatRoom = createChatRoom(validCode);
        chatRoomRepository.save(chatRoom);

        // when
        Optional<ChatRoom> foundChatRoom = chatRoomRepository.findByValidCode("invalidCode");

        // then
        assertThat(foundChatRoom).isNotPresent();
    }

    private ChatRoom createChatRoom(String validCode) {
        return ChatRoom.builder()
                .validCode(validCode)
                .build();
    }
}