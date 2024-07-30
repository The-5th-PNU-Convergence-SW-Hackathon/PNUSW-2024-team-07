package com.pinu.familing.domain.user.entity;

import com.pinu.familing.domain.BaseEntity;
import com.pinu.familing.domain.family.entity.Family;
import com.pinu.familing.domain.user.Gender;
import com.pinu.familing.domain.chat.entity.ChatRoom;
import com.pinu.familing.global.error.CustomException;
import com.pinu.familing.global.error.ExceptionCode;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "user_tb")
public class User extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    // 유저 아이디로 사용한다.
    private String username;
    // 유저 닉네임
    private String nickname;

    @Enumerated(value = EnumType.STRING)
    private Gender gender;

    @ManyToOne
    @JoinColumn(name = "family_id")
    private Family family;

    private int age;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chat_room_id")
    private ChatRoom chatRoom;

    private String role;

    @Builder
    private User(String username, String nickname, String role, int age, Gender gender, Family family) {
        this.username = username;
        this.nickname = nickname;
        this.role = role;
        this.age = age;
        this.gender = gender;
        this.family = family;
    }

    @Builder
    private User(String username, String nickname, String role, int age, Gender gender) {
        this.username = username;
        this.nickname = nickname;
        this.role = role;
        this.age = age;
        this.gender = gender;
    }

    public void registerFamily(Family family) {
        if (this.family != null) {
            throw new CustomException(ExceptionCode.ALREADY_HAVE_FAMILY);
        }
        this.family = family;
    }

    public void registerChatRoom(ChatRoom chatRoom) {
        this.chatRoom = chatRoom;
    }
}
