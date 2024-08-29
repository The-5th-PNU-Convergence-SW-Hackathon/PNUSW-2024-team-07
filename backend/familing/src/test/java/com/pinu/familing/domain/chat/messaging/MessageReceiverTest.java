package com.pinu.familing.domain.chat.messaging;

import com.pinu.familing.domain.chat.entity.Message;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.messaging.simp.SimpMessageSendingOperations;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

class MessageReceiverTest {

    @Mock
    private SimpMessageSendingOperations template;

    @InjectMocks
    private MessageReceiver messageReceiver;


    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @DisplayName("메시지를 수신하고 올바른 채팅방으로 전송한다.")
    @Test
    void receiveMessageAndSendToCorrectChatRoom() {
        //given
        Message message1 = Message.builder()
                .chatRoomId(1L)
                .content("Hello, world!")
                .build();

        Message message2 = Message.builder()
                .chatRoomId(2L)
                .content("Hello, world!")
                .build();
        // when
        messageReceiver.receiveMessage(message1);
        messageReceiver.receiveMessage(message2);

        // then
        verify(template, times(1)).convertAndSend("/sub/" + message1.getChatRoomId(), message1);
        verify(template, times(1)).convertAndSend("/sub/" + message2.getChatRoomId(), message2);
    }
}