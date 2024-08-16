package com.pinu.familing.domain.snapshot.service;

import com.pinu.familing.domain.family.entity.Family;
import com.pinu.familing.domain.family.handler.FamilyCodeHandler;
import com.pinu.familing.domain.family.repository.FamilyRepository;
import com.pinu.familing.domain.snapshot.repository.SnapshotImageRepository;
import com.pinu.familing.domain.snapshot.repository.SnapshotRepository;
import com.pinu.familing.domain.user.entity.User;
import com.pinu.familing.domain.user.repository.UserRepository;
import jakarta.persistence.EntityManager;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
class SnapshotServiceTest {

    private final SnapshotImageRepository snapshotImageRepository;
    private final SnapshotRepository snapshotRepository;
    private final UserRepository userRepository;
    private final TitleService titleService;
    private final FamilyRepository familyRepository;
    private final SnapshotService snapshotService;
    private final EntityManager entityManager;

    @Autowired
    public SnapshotServiceTest(SnapshotImageRepository snapshotImageRepository,
                               SnapshotRepository snapshotRepository,
                               UserRepository userRepository,
                               TitleService titleService,
                               FamilyRepository familyRepository,
                               SnapshotService snapshotService,
                               EntityManager entityManager1) {

        this.snapshotImageRepository = snapshotImageRepository;
        this.snapshotRepository = snapshotRepository;
        this.userRepository = userRepository;
        this.titleService = titleService;
        this.familyRepository = familyRepository;
        this.snapshotService = snapshotService;
        this.entityManager = entityManager1;
    }


    @BeforeEach
    @Transactional
    void setUp() {
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

        Family family = familyRepository.save(new Family("우리가족", FamilyCodeHandler.createCode(user1.getUsername())));

        user1.registerFamily(family);
        user2.registerFamily(family);
        //registerFamily()가 따로 트랜잭셔널이 걸린게 아니라 명시적으로 flush 해야함

        entityManager.flush();
        entityManager.clear();
    }

    //스냅샷 생성시 가족구성원 스냅샷 이미지도 정확하게 생성되는지 확인

    //스냅샷 이미지 정상 등록 확인


}