//package com.pinu.familing.domain.snapshot.service;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.fasterxml.jackson.databind.SerializationFeature;
//import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
//import com.pinu.familing.IntegrationTestSupport;
//import com.pinu.familing.domain.family.entity.Family;
//import com.pinu.familing.domain.family.handler.FamilyCodeHandler;
//import com.pinu.familing.domain.family.repository.FamilyRepository;
//import com.pinu.familing.domain.snapshot.dto.CustomPage;
//import com.pinu.familing.domain.snapshot.dto.SnapshotImageRequest;
//import com.pinu.familing.domain.snapshot.dto.SnapshotResponse;
//import com.pinu.familing.domain.snapshot.entity.SnapshotImage;
//import com.pinu.familing.domain.snapshot.entity.SnapshotTitle;
//import com.pinu.familing.domain.snapshot.repository.SnapshotImageRepository;
//import com.pinu.familing.domain.snapshot.repository.SnapshotRepository;
//import com.pinu.familing.domain.snapshot.repository.SnapshotTitleRepository;
//import com.pinu.familing.domain.user.entity.User;
//import com.pinu.familing.domain.user.repository.UserRepository;
//import com.pinu.familing.global.util.ApiUtils;
//import jakarta.annotation.PostConstruct;
//import jakarta.persistence.EntityManager;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.DisplayName;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageRequest;
//import org.springframework.data.domain.Pageable;
//import org.springframework.mock.web.MockMultipartFile;
//import org.springframework.data.domain.Pageable;
//import org.springframework.transaction.annotation.Transactional;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.time.LocalDate;
//import java.time.LocalTime;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//
//import java.time.LocalDate;
//import java.time.LocalTime;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//
//class SnapshotServiceTest extends IntegrationTestSupport {
//
//    private final UserRepository userRepository;
//    private final FamilyRepository familyRepository;
//    private final SnapshotService snapshotService;
//    private final SnapshotTitleRepository snapshotTitleRepository;
//    private final SnapshotRepository snapshotRepository;
//    private final SnapshotImageRepository snapshotImageRepository;
//    private final EntityManager entityManager;
//    private final TitleService titleService;
//
//
//
//    @Autowired
//    public SnapshotServiceTest(UserRepository userRepository,
//                               FamilyRepository familyRepository,
//                               SnapshotService snapshotService,
//                               SnapshotTitleRepository snapshotTitleRepository,
//                               SnapshotRepository snapshotRepository,
//                               SnapshotImageRepository snapshotImageRepository,
//                               EntityManager entityManager,
//                               TitleService titleService) {
//
//        this.userRepository = userRepository;
//        this.familyRepository = familyRepository;
//        this.snapshotService = snapshotService;
//        this.snapshotTitleRepository = snapshotTitleRepository;
//        this.snapshotRepository = snapshotRepository;
//        this.snapshotImageRepository = snapshotImageRepository;
//        this.entityManager = entityManager;
//        this.titleService = titleService;
//    }
//
//    @PostConstruct
//    void setUp() {
//        snapshotTitleRepository.save(SnapshotTitle.builder().title("1").build());
//        snapshotTitleRepository.save(SnapshotTitle.builder().title("2").build());
//        snapshotTitleRepository.save(SnapshotTitle.builder().title("3").build());
//        snapshotTitleRepository.save(SnapshotTitle.builder().title("4").build());
//        snapshotTitleRepository.save(SnapshotTitle.builder().title("5").build());
//        snapshotTitleRepository.save(SnapshotTitle.builder().title("6").build());
//        snapshotTitleRepository.save(SnapshotTitle.builder().title("7").build());
//        snapshotTitleRepository.save(SnapshotTitle.builder().title("8").build());
//        snapshotTitleRepository.save(SnapshotTitle.builder().title("9").build());
//        snapshotTitleRepository.save(SnapshotTitle.builder().title("10").build());
//
//    }
//
//    @BeforeEach
//    void setUpEach() {
//        userRepository.deleteAll();
//        familyRepository.deleteAll();
//        snapshotRepository.deleteAll();
//        snapshotImageRepository.deleteAll();
//
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
//        Family family = familyRepository.save(new Family("우리가족", "code"));
//
//        user1.registerFamily(family);
//        user2.registerFamily(family);
//
//        entityManager.flush();
//        entityManager.clear();
//    }
//
//    @Test
//    @DisplayName("특정날짜 조회할 때 스냅샷이 존재하지 않으면 스냅샷을 생성해서 제공한다.")
//    @Transactional
//    void getSnapshotByDateTest() {
//        //given
//        LocalDate localDate = LocalDate.now();
//        User user1 = userRepository.findByUsername("user1").get();
//        //when
//        SnapshotResponse snapshotResponse = snapshotService.getSnapshotByDate(localDate,"user1");
//        //then
//        assertThat(snapshotResponse).isNotNull();
//
//        assertThat(user1.getFamily().getUsers().size()).isEqualTo(2);
//        //when
//        SnapshotResponse snapshotResponse = snapshotService.getSnapshotByDate(localDate,"user1");
//        assertThat(snapshotResponse).isNotNull();
//        //then
//        System.out.println("snapshotResponse = " + snapshotResponse);
//
//        try {
//            // Create ObjectMapper instance
//            ObjectMapper objectMapper = new ObjectMapper();
//            objectMapper.registerModule(new JavaTimeModule()); // Register JavaTimeModule
//            objectMapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS); // Disable writing dates as timestamps
//            objectMapper.enable(SerializationFeature.INDENT_OUTPUT); // For pretty-printing
//
//            // Convert to JSON string
//            String json = objectMapper.writeValueAsString(ApiUtils.success(snapshotResponse));
//
//            // Print JSON string
//            System.out.println("snapshotResponsePage (JSON) = " + json);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//
//    }
//
//
//    @Test
//    @DisplayName("사용자의 이미지 등록 정상 작동")
//    @Transactional
//    void registerSnapshotImageTest() {
//        //given
//        User user1 = userRepository.findByUsername("user1").get();
//
//        LocalDate localDate = LocalDate.now();
//        SnapshotImageRequest snapshotImageRequest = new SnapshotImageRequest("테스트용 이미지");
//
//        //when
//        snapshotService.registerSnapshotImage(localDate, "user1", snapshotImageRequest);
//
//        //then
//        assertThat(snapshotImageRepository.findByUserAndDate(user1, localDate)).isNotNull();
//        System.out.println("snapshotResponse= " + snapshotService.getSnapshotByDate(localDate,"user1"));
//    }
//
//    @Test
//    @DisplayName("날짜 기준 페이지 조회")
//    @Transactional
//    void getSnapshotPage() {
//        //given
//        LocalDate today = LocalDate.now();
//
//        snapshotService.registerSnapshotImage(today, "user1", new SnapshotImageRequest("테스트용 이미지"));
//        LocalDate yesterday = today.minusDays(1);
//
//        snapshotService.registerSnapshotImage(yesterday, "user1", new SnapshotImageRequest("두번째 이미지"));
//
//        Pageable pageable = Pageable.ofSize(3);
//
//        //when
//        Page<SnapshotResponse> snapshotResponsePage =  snapshotService.getSnapshotPage(today, pageable, "user1");
//
//        System.out.println("snapshotResponsePage = " + snapshotResponsePage);
//        //then
//
//        try {
//            // Create ObjectMapper instance
//            ObjectMapper objectMapper = new ObjectMapper();
//            objectMapper.registerModule(new JavaTimeModule()); // Register JavaTimeModule
//            objectMapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS); // Disable writing dates as timestamps
//            objectMapper.enable(SerializationFeature.INDENT_OUTPUT); // For pretty-printing
//
//            // Convert to JSON string
//            String json = objectMapper.writeValueAsString(ApiUtils.success(new CustomPage(snapshotResponsePage)));
//
//            // Print JSON string
//            System.out.println("snapshotResponsePage (JSON) = " + json);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
//
//
//    @Test
//    @DisplayName("스냅샷 알람 시간 요청")
//    @Transactional
//    void getSnapshotAlarmTimeTest() {
//        //given
//        //when
//        //then
//        assertThat(snapshotService.getSnapshotAlarmTime("user1")).isNotNull();
//        System.out.println("snapshotAlarmTime(user1) = " + snapshotService.getSnapshotAlarmTime("user1"));
//    }
//
//    @Test
//    @DisplayName("스냅샷 알람 시간 변경")
//    @Transactional
//    void changeAlarmTimeTest() {
//        //given
//        LocalTime localTime = LocalTime.MIDNIGHT;
//
//        //when
//        snapshotService.changeAlarmTime("user1", localTime);
//
//        //then
//        assertThat(familyRepository.findByCode("code").get().getSnapshotAlarmTime()).isEqualTo(localTime);
//    }
//
//
//
//
//
//
//
//}