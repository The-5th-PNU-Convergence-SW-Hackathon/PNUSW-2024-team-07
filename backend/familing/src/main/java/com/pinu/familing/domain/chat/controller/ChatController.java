package com.pinu.familing.domain.chat.controller;

import com.pinu.familing.domain.chat.dto.ChattingHistoryResponseDto;
import com.pinu.familing.domain.chat.entity.Message;
import com.pinu.familing.domain.chat.service.ChatService;
import com.pinu.familing.global.oauth.dto.CustomOAuth2User;
import com.pinu.familing.global.oauth.dto.PrincipalDetails;
import com.pinu.familing.global.util.ApiUtils;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class ChatController {

    private final ChatService chatService;

    // 자기 단톡방 채팅내역 조회
    @GetMapping("/chatroom/message")
    public ApiUtils.ApiResult<?> chattingList(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        ChattingHistoryResponseDto chattingList = chatService.getChattingList(principalDetails.getUsername());
        return ApiUtils.success(chattingList);
    }

    // 자신의 채팅방 정보 조회
    @GetMapping("/chatroom/user")
    public ApiUtils.ApiResult<?> chatRoomInfo(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        return ApiUtils.success(chatService.getChatRoomInfo(principalDetails.getUsername()));
    }

    // ws.send("/pub/message", {}, JSON.stringify("메시지"); 로들어오는 요청을 처리한다.
    @MessageMapping("/message")
    public void sendMessage(@Valid Message message, StompHeaderAccessor accessor) {
        String username = (String) accessor.getSessionAttributes().get("username");
        chatService.sendMessage(message, username);
    }


//    // 메시지 전송 후 callback
//    @PostMapping("/chatroom/notification")
//    public ResponseEntity<Message> sendNotification(@Valid @RequestBody Message message) {
//        Message savedMessage = chatService.sendNotificationAndSaveMessage(message);
//        return ResponseEntity.ok(savedMessage);
//    }
}

