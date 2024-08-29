package com.pinu.familing.domain.chat.messaging;

import com.pinu.familing.domain.chat.entity.Message;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class MessageSender {

    private final KafkaTemplate<String, Message> kafkaTemplate;

    // 메시지를 지정한 Kafka 토픽으로 전송
    public void send(String topic, Message data) {

        // KafkaTemplate을 사용하여 메시지를 지정된 토픽으로 전송
        kafkaTemplate.send(topic, data);
    }
}
