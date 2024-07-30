package com.pinu.familing.domain.chat.service;


import com.pinu.familing.domain.chat.dto.ChatRoomInfoDto;
import com.pinu.familing.domain.chat.entity.Chatting;
import com.pinu.familing.domain.chat.entity.Message;
import com.pinu.familing.domain.chat.messaging.MessageSender;
import com.pinu.familing.domain.chat.repository.MongoChatRepository;
import com.pinu.familing.domain.chat.dto.ChatResponseDto;
import com.pinu.familing.domain.chat.dto.ChattingHistoryResponseDto;
import com.pinu.familing.domain.chat.entity.ChatRoom;
import com.pinu.familing.domain.chat.repository.ChatRoomRepository;
import com.pinu.familing.domain.user.entity.User;
import com.pinu.familing.domain.user.repository.UserRepository;
import com.pinu.familing.global.error.CustomException;
import com.pinu.familing.global.util.ConstantUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.checkerframework.checker.units.qual.A;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.DoubleStream;

import static com.pinu.familing.global.error.ExceptionCode.USER_NOT_FOUND;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ChatService {

    private final MongoChatRepository mongoChatRepository;
    private final MessageSender sender;
    private final ChatRoomRepository chatRoomRepository;
    private final UserRepository userRepository;

    @Transactional
    public boolean makeChatRoom(User user, String validCode) {
        // ChatRoom 객체를 Builder 패턴을 사용하여 생성
        ChatRoom chatRoom = ChatRoom.builder()
                .validCode(validCode)
                .users(new ArrayList<>())
                .build();
        // ChatRoom 객체에 User 추가
        chatRoomRepository.save(chatRoom);
        chatRoom.addUser(user);
        chatRoomRepository.save(chatRoom);
        return true;
    }


    public ChattingHistoryResponseDto getChattingList(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
        List<ChatResponseDto> chattingList = mongoChatRepository.findByChatRoomId(user.getChatRoom().getId())
                .stream()
                .map(chat -> new ChatResponseDto(chat, user.getId()))
                .collect(Collectors.toList());
        return ChattingHistoryResponseDto.builder()
                .chatList(chattingList)
                .nickName(user.getNickname())
                .build();
    }

    //메시지 전송
    public void sendMessage(Message message, String username) {

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));

        // message 객체에 보낸시간, 보낸사람 memberNo, 닉네임을 셋팅해준다.
        message.setSendTimeAndSenderAndRoomId(LocalDateTime.now(), user);

        Chatting chatting = message.convertEntity();
        // 채팅 내용을 저장한다.
        Chatting savedChat = mongoChatRepository.save(chatting);
        // 저장된 고유 ID를 반환한다.
        message.setId(savedChat.getId());

        // 메시지를 전송한다.
        sender.send(ConstantUtil.KAFKA_CHAT_TOPIC, message);
    }

    public ChatRoomInfoDto getChatRoomInfo(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
        System.out.println(user.getChatRoom().getId());
        return ChatRoomInfoDto.builder()
                .chatRoomId(user.getChatRoom().getId())
                .build();
    }

//    @Transactional
//    public Message sendNotificationAndSaveMessage(Message message) {
//        // 메시지 저장과 알람 발송을 위해 메시지를 보낸 회원을 조회
//        Member findMember = memberRepository.findById(message.getSenderNo())
//                .orElseThrow(IllegalStateException::new);
//
//        // 상대방이 읽지 않은 경우에만 알림 전송 -> 단톡방이라 안됨
//        if (message.getReadCount().equals(1)) {
//            // 알람 전송을 위해 메시지를 받는 사람을 조회한다.
//            Member receiveMember = chatQueryService.getReceiverNumber(message.getChatNo(), message.getSenderNo());
//            String content =
//                    message.getContentType().equals("image") ? "image" : message.getContent();
//            // 알람을 보낼 URL을 생성한다.
//            String sendUrl = getNotificationUrl(message.getSaleNo(), message.getChatNo());
//
//            // 알림을 전송한다.
//            notificationService.send(findMember, receiveMember, NotifiTypeEnum.CHAT, sendUrl, content);
//        }
//
//        // 보낸 사람일 경우에만 메시지를 저장 -> 중복 저장 방지
//        if (message.getSenderEmail().equals(findMember.getEmail())) {
//            // Message 객체를 채팅 엔티티로 변환한다.
//            Chatting chatting = message.convertEntity();
//            // 채팅 내용을 저장한다.
//            Chatting savedChat = mongoChatRepository.save(chatting);
//            // 저장된 고유 ID를 반환한다.
//            message.setId(savedChat.getId());
//        }
//
//        return message;
//    }
//
//
//
//    // 읽지 않은 메시지 채팅장 입장시 읽음 처리
//    public void updateCountAllZero(Integer chatNo, String email) {
//        Member findMember = memberRepository.findByEmail(email)
//                .orElseThrow(IllegalStateException::new);
//
//        Update update = new Update().set("readCount", 0);
//        Query query = new Query(Criteria.where("chatRoomNo").is(chatNo)
//                .and("senderNo").ne(findMember.getMemberNo()));
//
//        mongoTemplate.updateMulti(query, update, Chatting.class);
//    }
//
//    // 읽지 않은 메시지 카운트
//    long countUnReadMessages(Integer chatRoomNo, Integer senderNo) {
//        Query query = new Query(Criteria.where("chatRoomNo").is(chatRoomNo)
//                .and("readCount").is(1)
//                .and("senderNo").ne(senderNo));
//
//        return mongoTemplate.count(query, Chatting.class);
//    }
//
//    private String getNotificationUrl(Integer saleNo, Integer chatNo) {
//        return chatNo +
//                "?adoptId=" +
//                saleNo;
//    }


}
