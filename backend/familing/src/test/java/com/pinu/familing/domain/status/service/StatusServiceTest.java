package com.pinu.familing.domain.status.service;

import com.pinu.familing.IntegrationTestSupport;
import com.pinu.familing.domain.family.entity.Family;
import com.pinu.familing.domain.family.repository.FamilyRepository;
import com.pinu.familing.domain.status.dto.MyFamilyStatusResponse;
import com.pinu.familing.domain.user.entity.User;
import com.pinu.familing.domain.user.repository.UserRepository;
import com.pinu.familing.domain.status.dto.StatusRequest;
import com.pinu.familing.domain.status.entity.Status;
import com.pinu.familing.domain.status.repository.StatusRepository;
import jakarta.persistence.EntityManager;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

class StatusServiceTest extends IntegrationTestSupport {

    private final StatusService statusService;
    private final UserRepository userRepository;
    private final StatusRepository statusRepository;
    private final FamilyRepository familyRepository;
    private final EntityManager entityManager;

    @Autowired
    StatusServiceTest(StatusService StatusService,
                      UserRepository userRepository,
                      StatusRepository StatusRepository,
                      FamilyRepository familyRepository,
                      EntityManager entityManager) {
        this.statusService = StatusService;
        this.userRepository = userRepository;
        this.statusRepository = StatusRepository;
        this.familyRepository = familyRepository;
        this.entityManager = entityManager;
    }

    @BeforeEach
    public void setUp() {
        statusRepository.save(Status.builder().text("공부 중").build());
        statusRepository.save(Status.builder().text("노는 중").build());
        statusRepository.save(Status.builder().text("쉬는 중").build());
        statusRepository.save(Status.builder().text("일하는 중").build());

        User user1 = userRepository.save(
                User.builder()
                        .username("user1")
                        .nickname("유저1").build());


        User user2 = userRepository.save(
                User.builder()
                        .username("user2")
                        .nickname("유저2").build());

        Family family = familyRepository.save(new Family("가족", "code"));

        user1.registerFamily(family);
        user2.registerFamily(family);

        entityManager.flush();
        entityManager.clear();

    }



    @Test
    @DisplayName("상태리스트조회 메서드 테스트")
    @Transactional
    void getStatusListTest() {
        //give
        //when
        List<?> StatusList =statusService.getStatusList();
        //then
        assertThat(StatusList.size()).isEqualTo(4);
        System.out.println("StatusList = " + StatusList);
    }

    @Test
    @DisplayName("유저의 상태 변경되는지 테스트")
    @Transactional
    void changeStatusTest() {
        entityManager.clear();
        //give
        StatusRequest statusRequest = new StatusRequest(statusRepository.findByText("쉬는 중").get().getId());
        //when
        statusService.changeUserStatus("user1", statusRequest);
        //then
        assertThat(userRepository.findByUsername("user1").get().getStatus().getText()).isEqualTo("쉬는 중");

    }

    @Test
    @DisplayName("유저 기준 가족의 상태조회")
    @Transactional
    void getFamilyStatusListTest() {
        //give
        Status status1 = statusRepository.findByText("공부 중").get();
        User user1 = userRepository.findByUsername("user1").get();
        user1.changeStatus(status1);

        userRepository.save(user1);

        System.out.println("user1.getFamily().getUsers() = " + user1.getFamily().getUsers());

        Status status2 = statusRepository.findByText("노는 중").get();
        User user2 = userRepository.findByUsername("user2").get();
        user2.changeStatus(status2);

        userRepository.save(user2);

        System.out.println("user2 = " + user2.getFamily());
        //when
        MyFamilyStatusResponse myFamilyStatusResponse = statusService.getFamilyStatusList("user1");

        //then
        System.out.println("myFamilyStatusResponse = " + myFamilyStatusResponse);

    }

}