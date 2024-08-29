package com.pinu.familing.domain.lovecard.service;

import com.pinu.familing.domain.alarm.AlarmType;
import com.pinu.familing.domain.alarm.service.AlarmService;
import com.pinu.familing.domain.lovecard.dto.LovecardLogResponse;
import com.pinu.familing.domain.lovecard.dto.LovecardResponse;
import com.pinu.familing.domain.lovecard.entity.Lovecard;
import com.pinu.familing.domain.lovecard.entity.LovecardLog;
import com.pinu.familing.domain.lovecard.repository.LovecardLogRepository;
import com.pinu.familing.domain.lovecard.repository.LovecardRepository;
import com.pinu.familing.domain.lovecard.dto.LovecardRequest;
import com.pinu.familing.domain.user.entity.User;
import com.pinu.familing.domain.user.repository.UserRepository;
import com.pinu.familing.global.error.CustomException;
import com.pinu.familing.global.error.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class LovecardService {

    private final LovecardLogRepository lovecardLogRepository;
    private final LovecardRepository lovecardRepository;
    private final UserRepository userRepository;
    private final AlarmService alarmService;

    public Page<?> getLovecardPage(Pageable pageable) {
        Page<LovecardResponse> lovecardResponsePage= lovecardRepository.findAll(pageable)
                .map(LovecardResponse::new);
        return lovecardResponsePage;
    }

    public Page<LovecardLogResponse> getLovecardByFamilyLogPage(String username, String familyUsername, Pageable pageable) {
        User receiver = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(ExceptionCode.USER_NOT_FOUND));

        User sender = userRepository.findByUsername(familyUsername)
                .orElseThrow(() -> new CustomException(ExceptionCode.USER_NOT_FOUND));

        Page<LovecardLogResponse> lovecardLogResponses = lovecardLogRepository.findAllBySenderAndReceiver(sender, receiver, pageable)
                .map(LovecardLogResponse::new);
        return lovecardLogResponses;
    }

    @Transactional
    public void sendLoveCardToFamily(String username, String familyUsername, LovecardRequest lovecardRequest) {
        User sender = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(ExceptionCode.USER_NOT_FOUND));

        User receiver = userRepository.findByUsername(familyUsername)
                .orElseThrow(() -> new CustomException(ExceptionCode.USER_NOT_FOUND));

        Lovecard lovecard = lovecardRepository.findById(lovecardRequest.cardId())
                .orElseThrow(()-> new CustomException(ExceptionCode.LOVECARD_NOT_FOUND));
        alarmService.sendAlarm(sender, receiver, AlarmType.LOVECARD_RECEIVE);
        lovecardLogRepository.save(LovecardLog.builder().lovecard(lovecard).receiver(receiver).sender(sender).build());
    }
}
