package com.pinu.familing.domain.status.service;

import com.pinu.familing.domain.status.dto.MyFamilyStatusResponse;
import com.pinu.familing.domain.user.entity.User;
import com.pinu.familing.domain.user.repository.UserRepository;
import com.pinu.familing.domain.status.dto.StatusRequest;
import com.pinu.familing.domain.status.dto.StatusResponse;
import com.pinu.familing.domain.status.entity.Status;
import com.pinu.familing.domain.status.repository.StatusRepository;
import com.pinu.familing.global.error.CustomException;
import com.pinu.familing.global.error.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StatusService {

    public final UserRepository userRepository;
    public final StatusRepository StatusRepository;

    //상태 리스트 조회
    public List<StatusResponse> getStatusList() {
        return StatusRepository.findAll().stream().map(StatusResponse::new)
                .collect(Collectors.toList());
    }

    public void changeUserStatus(String username, StatusRequest statusRequest) {
        User user = getUserWithFamily(username);
        Status status = StatusRepository.findById(statusRequest.id())
                .orElseThrow(() -> new CustomException(ExceptionCode.STATUS_NOT_FOUND));

        user.changeStatus(status);

        userRepository.save(user);

    }

    @Transactional(readOnly = true)
    public MyFamilyStatusResponse getFamilyStatusList(String username) {
        User user = getUserWithFamily(username);
        return new MyFamilyStatusResponse(user);
    }

    private User getUserWithFamily(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(ExceptionCode.USER_NOT_FOUND));
        if (user.getFamily() == null) {
            throw new CustomException(ExceptionCode.FAMILY_NOT_FOUND);
        }
        return user;
    }

}
