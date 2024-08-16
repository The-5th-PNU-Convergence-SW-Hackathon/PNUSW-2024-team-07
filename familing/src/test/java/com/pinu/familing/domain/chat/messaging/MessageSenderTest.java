package com.pinu.familing.domain.chat.messaging;


import com.pinu.familing.domain.chat.entity.Message;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.kafka.core.KafkaTemplate;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

class MessageSenderTest {

    @Mock
    private KafkaTemplate<String, Message> kafkaTemplate;

    @InjectMocks
    private MessageSender messageSender;


    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @DisplayName("KafkaTemplate을 사용하여 메시지를 지정된 토픽으로 전송한다.")
    @Test
    void sendToKafkaTopic() {
        // given
        String topic = "test-topic";
        Message message = Message.builder()
                .content("Hello, Kafka!")
                .build();
        // when
        messageSender.send(topic, message);

        // then
        verify(kafkaTemplate, times(1)).send(topic, message);
    }
}