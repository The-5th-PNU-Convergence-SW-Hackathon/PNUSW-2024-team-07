package com.pinu.familing.domain.user.service;

import com.pinu.familing.domain.family.repositiry.FamilyRepository;
import com.pinu.familing.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final FamilyRepository familyRepository;


}
