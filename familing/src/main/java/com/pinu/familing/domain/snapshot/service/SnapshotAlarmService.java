package com.pinu.familing.domain.snapshot.service;

import com.pinu.familing.domain.family.entity.Family;
import com.pinu.familing.domain.family.repository.FamilyRepository;
import com.pinu.familing.domain.snapshot.entity.SnapshotAlarmChange;
import com.pinu.familing.domain.snapshot.repository.SnapshotAlarmChangeRepository;
import com.pinu.familing.domain.user.entity.User;
import com.pinu.familing.domain.user.repository.UserRepository;
import com.pinu.familing.global.error.CustomException;
import com.pinu.familing.global.error.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalTime;

@Service
@RequiredArgsConstructor
public class SnapshotAlarmService {

    private final FamilyRepository familyRepository;
    private final SnapshotAlarmChangeRepository snapshotAlarmChangeRepository;
    private final UserRepository userRepository;

    /**
     * 알람 변경 신청을 등록하는 메서드
     */
    public void registerAlarmChangeRequest(String username, LocalTime targetTime) {
        Family family = getFamily(username);
        SnapshotAlarmChange snapshotAlarmChange = snapshotAlarmChangeRepository.findByFamily(family)
                .orElse(new SnapshotAlarmChange(family, targetTime));
        snapshotAlarmChange.updateTime(targetTime);
        snapshotAlarmChangeRepository.save(snapshotAlarmChange);
    }

    /**
     * 변경할 알람 시간을 제공
     */
    public LocalTime getSnapshotAlarmTime(String username) {
        Family family = getFamily(username);
        if (snapshotAlarmChangeRepository.existsByFamily(family)) {
            return snapshotAlarmChangeRepository.findByFamily(family).get().getTimeToChange();
        }
        return family.getSnapshotAlarmTime();
    }

    /**
     * 모든 알람 변경을 하는 메서드
     */
    @Transactional
    public void changeAllAlarmChangeRequest() {
        snapshotAlarmChangeRepository.findAll()
                .forEach(this::changeAlarmChangeRequest);
    }

    /**
     * 알람을 변경하는 메서드
     */
    private void changeAlarmChangeRequest(SnapshotAlarmChange snapshotAlarmChange) {
        System.out.println(snapshotAlarmChange.getFamily().getFamilyName() + " : " + snapshotAlarmChange.getTimeToChange() + " 알림 변경하기");
        Family targetFamily = snapshotAlarmChange.getFamily();
        targetFamily.changeSnapshotAlarmTime(snapshotAlarmChange.getTimeToChange());
        familyRepository.save(targetFamily);
        snapshotAlarmChangeRepository.delete(snapshotAlarmChange);
    }

    /**
     * 유저네임을 기준으로 가족 제공
     */
    private Family getFamily(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(ExceptionCode.USER_NOT_FOUND));
        if (user.getFamily() == null) {
            throw new CustomException(ExceptionCode.FAMILY_NOT_FOUND);
        }

        return user.getFamily();
    }


}
