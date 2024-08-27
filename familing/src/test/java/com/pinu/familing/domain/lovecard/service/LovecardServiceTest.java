//package com.pinu.familing.domain.lovecard.service;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.fasterxml.jackson.databind.SerializationFeature;
//import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
//import com.pinu.familing.IntegrationTestSupport;
//import com.pinu.familing.domain.lovecard.dto.LovecardLogResponse;
//import com.pinu.familing.domain.lovecard.dto.LovecardRequest;
//import com.pinu.familing.domain.lovecard.entity.Lovecard;
//import com.pinu.familing.domain.lovecard.entity.LovecardLog;
//import com.pinu.familing.domain.lovecard.repository.LovecardLogRepository;
//import com.pinu.familing.domain.lovecard.repository.LovecardRepository;
//import com.pinu.familing.domain.snapshot.dto.CustomPage;
//import com.pinu.familing.domain.user.entity.User;
//import com.pinu.familing.domain.user.repository.UserRepository;
//import org.junit.jupiter.api.DisplayName;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageRequest;
//import org.springframework.data.domain.Pageable;
//import org.springframework.transaction.annotation.Transactional;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//class LovecardServiceTest extends IntegrationTestSupport {
//
//    @Autowired
//    private LovecardService lovecardService;
//    @Autowired
//    private LovecardLogRepository lovecardLogRepository;
//    @Autowired
//    private LovecardRepository lovecardRepository;
//    @Autowired
//    private UserRepository userRepository;
//
//    @Test
//    @DisplayName("애정카드 페이지 보이는지 확인")
//    void getLovecardPage() {
//        //given
//        Pageable pageable = PageRequest.of(0, 12);
//        //when
//        Page<?> page = lovecardService.getLovecardPage(pageable);
//
//        //then
//        assertThat(page.getContent()).isNotNull();
//
//        CustomPage customPage = new CustomPage(page);
//        System.out.println("customPage = " + customPage);
//    }
//
//
//    @Test
//    @DisplayName("특정 가족과 주고 받은 애정카드 정상 조회 테스트")
//    void getLovecardByFamilyLogPage() throws JsonProcessingException {
//        //given
//        User receiver = userRepository.save(User.builder()
//                .username("user1")
//                .realname("서현")
//                .nickname("동생")
//                .build());
//
//        User sender = userRepository.save(User.builder()
//                .username("user2")
//                .realname("서경")
//                .nickname("언니")
//                .build());
//
//        Lovecard lovecard = lovecardRepository.findById(1L).get();
//
//        Pageable pageable = PageRequest.of(0, 12);
//
//        lovecardLogRepository.save(LovecardLog.builder().lovecard(lovecard).receiver(receiver).sender(sender).build());
//
//        //then
//        Page<LovecardLogResponse> lovecardLogResponses = lovecardService.getLovecardByFamilyLogPage(receiver.getUsername(), sender.getUsername(), pageable);
//
//        System.out.println("lovecardLogResponses = " + lovecardLogResponses);
//
//        // Create ObjectMapper instance
//        ObjectMapper objectMapper = new ObjectMapper();
//        objectMapper.registerModule(new JavaTimeModule()); // Register JavaTimeModule
//        objectMapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS); // Disable writing dates as timestamps
//        objectMapper.enable(SerializationFeature.INDENT_OUTPUT); // For pretty-printing
//
//        // Convert to JSON string
//        String json = objectMapper.writeValueAsString(lovecardLogResponses);
//
//        // Print JSON string
//        System.out.println("lovecardLogResponses (JSON) = " + json);
//    }
//
//    @Test
//    @Transactional
//    @DisplayName("원하는 가족에게 애정카드 보내주는 기능 정상 작동")
//    void sendLoveCardToFamily() {
//        //given
//        User user1 = userRepository.save(User.builder()
//                .username("user1")
//                .realname("서현")
//                .nickname("동생")
//                .build());
//
//        User user2 = userRepository.save(User.builder()
//                .username("user2")
//                .realname("서경")
//                .nickname("언니")
//                .build());
//
//
//        //when
//        lovecardService.sendLoveCardToFamily(user1.getUsername(), user2.getUsername(), new LovecardRequest(1L));
//
//        //then
//        assertThat(lovecardLogRepository.findById(1L).get().getSender().getUsername()).isEqualTo("user1");
//
//
//    }
//}