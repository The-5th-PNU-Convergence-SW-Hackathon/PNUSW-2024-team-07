package com.pinu.familing.domain.chat.entity;

import com.pinu.familing.domain.user.entity.User;
import jakarta.validation.ConstraintViolationException;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

public class ChatRoomTest {

    private Validator validator;


    @DisplayName("ChatRoom 생성 시 가족 코드 등록한다.")
    @Test
    void createChatRoom() {
        // given
        String validCode = "validCode123";

        // when
        ChatRoom chatRoom = ChatRoom.builder()
                .validCode(validCode)
                .users(new ArrayList<>())
                .build();

        // then
        assertThat(chatRoom.getValidCode()).isEqualTo(validCode);
    }

    @DisplayName("ChatRoom 생성할 때 validCode가 null이면 예외가 발생한다.")
    @Test
    void validCodeNotNull() {

        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        validator = factory.getValidator();
        // given
        ChatRoom chatRoom = ChatRoom.builder()
                .validCode(null)
                .build();

        // when & then
        assertThatThrownBy(() -> {
            validator.validate(chatRoom).forEach(violation -> {
                throw new ConstraintViolationException(violation.getMessage(), null);
            });
        }).isInstanceOf(ConstraintViolationException.class)
                .hasMessageContaining("채팅방 생성시 가족코드는 필수입니다.");
    }

    @DisplayName("ChatRoom 생성 시 초기에는 사용자가 없다.")
    @Test
    void initialUsersEmpty() {
        // given
        String validCode = "validCode123";

        // when
        ChatRoom chatRoom = ChatRoom.builder()
                .validCode(validCode)
                .users(new ArrayList<>())
                .build();

        // then
        assertThat(chatRoom.getUsers()).isEmpty();
    }

    @DisplayName("ChatRoom에 사용자를 추가할 수 있다.")
    @Test
    void addUserToChatRoom() {
        // given
        ChatRoom chatRoom = ChatRoom.builder()
                .validCode("validCode123")
                .users(new ArrayList<>())
                .build();
        User user1 = createUser("user1");
        User user2 = createUser("user2");

        // when
        chatRoom.addUser(user1);
        chatRoom.addUser(user2);

        // then
        assertThat(chatRoom.getUsers()).contains(user1, user2);
        assertThat(chatRoom.getUsers()).hasSize(2);
        assertThat(user1.getChatRoom()).isEqualTo(chatRoom);
    }

    private User createUser(String username) {
        return User.builder()
                .username(username)
                .build();
    }
}