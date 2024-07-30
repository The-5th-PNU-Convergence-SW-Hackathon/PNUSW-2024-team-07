package com.pinu.familing.domain.chat.messaging;

import com.pinu.familing.domain.chat.entity.Message;
import com.pinu.familing.global.util.ConstantUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class MessageReceiver {

    private final SimpMessageSendingOperations template;

    //등록한 kafkaListenerContainerFactory를 사용해 리스너가 구독할 토픽 KAFKA_CHAT_TOPIC
    @KafkaListener(topics = ConstantUtil.KAFKA_CHAT_TOPIC, containerFactory = "kafkaListenerContainerFactory")
    public void receiveMessage(Message message) {
        log.info("전송 위치 = /sub/"+ message.getChatRoomId());
        log.info("채팅 방으로 메시지 전송 = {}", message);

        // 메시지객체 내부의 채팅방번호를 참조하여, 해당 채팅방 구독자에게 메시지를 발송한다.
        template.convertAndSend("/sub/" + message.getChatRoomId(), message);
    }
}
