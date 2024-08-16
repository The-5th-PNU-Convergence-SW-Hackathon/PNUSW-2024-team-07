package com.pinu.familing.domain.chat.service;

import com.pinu.familing.IntegrationTestSupport;
import com.pinu.familing.domain.chat.dto.ChatRoomInfoDto;
import com.pinu.familing.domain.chat.dto.ChattingHistoryResponseDto;
import com.pinu.familing.domain.chat.entity.ChatRoom;
import com.pinu.familing.domain.chat.entity.Message;
import com.pinu.familing.domain.chat.repository.ChatRoomRepository;
import com.pinu.familing.domain.chat.repository.MongoChatRepository;
import com.pinu.familing.domain.user.entity.User;
import com.pinu.familing.domain.user.repository.UserRepository;
import com.pinu.familing.global.error.CustomException;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@Transactional
class ChatServiceTest extends IntegrationTestSupport {

    private final String validCode = "validCode123";
    @Autowired
    private ChatService chatService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ChatRoomRepository chatRoomRepository;
    @Autowired
    private MongoChatRepository mongoChatRepository;
    private User testUser;

    @BeforeEach
    void setUp() {
        testUser = User.builder()
                .nickname("testNickname")
                .username("kakao 12345")
                .build();
        userRepository.save(testUser);
    }

    @AfterEach
    void tearDown() {
        mongoChatRepository.deleteAll();
    }

    @Test
    @DisplayName("가족 채팅방을 만들고 초기 user로 들어간다.")
    void testMakeChatRoom() {
        boolean result = chatService.makeChatRoom(testUser, validCode);

        assertThat(result).isTrue();
        ChatRoom chatRoom = chatRoomRepository.findByValidCode(validCode)
                .orElseThrow(() -> new IllegalStateException("ChatRoom not found"));
        assertThat(chatRoom.getUsers()).contains(testUser);
    }

    @DisplayName("중복된 validCode로 채팅방을 만드려고 할 때 예외가 발생한다.")
    @Test
    void createChatRoomWithDuplicateValidCode() {
        // given
        chatService.makeChatRoom(testUser, validCode);

        User otherUser = User.builder()
                .nickname("testNickname")
                .username("kakao 23451")
                .build();

        // when & then
        assertThatThrownBy(() -> chatService.makeChatRoom(otherUser, validCode))
                .isInstanceOf(CustomException.class)
                .hasMessageContaining("채팅방 생성시 중복된 코드를 사용할 수 없습니다."); // 메시지는 필요에 따라 검증
    }

    @Test
    @DisplayName("채팅을 전송하고 mongo 데이터베이스에서 조회할 수 있다.")
    void testGetChattingList() {
        // given
        chatService.makeChatRoom(testUser, validCode);
        Message message = Message.builder()
                .content("Hello, World!")
                .build();
        chatService.sendMessage(message, testUser.getUsername());


        // when
        ChattingHistoryResponseDto response = chatService.getChattingList(testUser.getUsername());

        // then
        assertThat(response.nickName()).isEqualTo(testUser.getNickname());
        assertThat(response.chatList()).hasSize(1);
        assertThat(response.chatList().get(0).content()).isEqualTo("Hello, World!");
    }


    @Test
    @DisplayName("사용자의 가족 채팅방의 정보를 조회한다.")
    void testGetChatRoomInfo() {
        // given
        chatService.makeChatRoom(testUser, validCode);

        // when
        ChatRoomInfoDto chatRoomInfo = chatService.getChatRoomInfo(testUser.getUsername());

        // then
        assertThat(chatRoomInfo.chatRoomId()).isEqualTo(testUser.getChatRoom().getId());
    }
}