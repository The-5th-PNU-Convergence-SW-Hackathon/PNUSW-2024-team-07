package com.pinu.familing.domain.lovecard.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.pinu.familing.IntegrationTestSupport;
import com.pinu.familing.domain.lovecard.dto.LovecardLogResponse;
import com.pinu.familing.domain.lovecard.dto.LovecardRequest;
import com.pinu.familing.domain.lovecard.entity.Lovecard;
import com.pinu.familing.domain.lovecard.entity.LovecardLog;
import com.pinu.familing.domain.lovecard.repository.LovecardLogRepository;
import com.pinu.familing.domain.lovecard.repository.LovecardRepository;
import com.pinu.familing.domain.snapshot.dto.CustomPage;
import com.pinu.familing.domain.user.entity.User;
import com.pinu.familing.domain.user.repository.UserRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@Transactional
class LovecardServiceTest extends IntegrationTestSupport {

    @Autowired
    private LovecardService lovecardService;
    @Autowired
    private LovecardLogRepository lovecardLogRepository;
    @Autowired
    private LovecardRepository lovecardRepository;
    @Autowired
    private UserRepository userRepository;


    @AfterEach
    void tearDown() {
        lovecardLogRepository.deleteAll();
        lovecardRepository.deleteAll();
        userRepository.deleteAll();

    }

    @BeforeEach
    void setUp() {
        Lovecard lovecard1 = new Lovecard("이미지1");
        Lovecard lovecard2 = new Lovecard("이미지2");
        Lovecard lovecard3 = new Lovecard("이미지3");
        Lovecard lovecard4 = new Lovecard("이미지4");
        lovecardRepository.save(lovecard1);
        lovecardRepository.save(lovecard2);
        lovecardRepository.save(lovecard3);
        lovecardRepository.save(lovecard4);
    }

    @Test
    @DisplayName("애정카드 페이지 보이는지 확인")
    void getLovecardPage() {
        //given
        Pageable pageable = PageRequest.of(0, 4);
        //when
        Page<?> page = lovecardService.getLovecardPage(pageable);

        //then
        assertThat(page.getContent()).isNotNull();

    }


    @Test
    @Transactional
    @DisplayName("원하는 가족에게 애정카드 보내주는 기능 정상 작동")
    void sendLoveCardToFamily() {
        //given
        User user1 = userRepository.save(User.builder()
                .username("user1")
                .realname("서현")
                .nickname("동생")
                .build());

        User user2 = userRepository.save(User.builder()
                .username("user2")
                .realname("서경")
                .nickname("언니")
                .build());


        //when
        lovecardService.sendLoveCardToFamily(user1.getUsername(), user2.getUsername(), new LovecardRequest(1L));

        //then
        assertThat(lovecardLogRepository.findById(1L).get().getSender().getUsername()).isEqualTo("user1");


    }
}