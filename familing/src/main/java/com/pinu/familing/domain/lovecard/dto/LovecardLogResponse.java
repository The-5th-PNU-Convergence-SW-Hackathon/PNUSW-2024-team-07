package com.pinu.familing.domain.lovecard.dto;

import com.pinu.familing.domain.lovecard.entity.LovecardLog;
import com.pinu.familing.domain.user.entity.User;

import java.time.LocalDate;

public record LovecardLogResponse(Long id,
                                  LovecardUser receiver,
                                  LovecardUser sender,
                                  LovecardResponse lovecardResponse,
                                  LocalDate localDate
                                  ) {
    private record LovecardUser(String usernaem,
                        String nickname) {

        public LovecardUser(User user) {
            this(user.getUsername(), user.getNickname());
        }
    }

    public LovecardLogResponse(LovecardLog lovecardLog) {
        this(lovecardLog.getId(), new LovecardUser(lovecardLog.getReceiver()), new LovecardUser(lovecardLog.getSender()), new LovecardResponse(lovecardLog.getLovecard()),lovecardLog.getCreateDateTime().toLocalDate());
    }


}
