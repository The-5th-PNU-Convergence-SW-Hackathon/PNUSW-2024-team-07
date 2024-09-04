package com.pinu.familing.domain.user.repository;

import com.pinu.familing.domain.family.entity.Family;
import com.pinu.familing.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    List<User> findAllByFamily(Family family);

    @Query("SELECT u FROM User u JOIN FETCH u.chatRoom WHERE u.username = :username")
    Optional<User> findByUsernameWithChatRoom(@Param("username") String username);
}
