package com.pinu.familing.domain.user.entity;

import com.pinu.familing.domain.BaseEntity;
import com.pinu.familing.domain.chat.entity.ChatRoom;
import com.pinu.familing.domain.family.entity.Family;
import com.pinu.familing.domain.user.Gender;
import com.pinu.familing.domain.user.dto.Nickname;
import com.pinu.familing.domain.user.dto.Realname;
import com.pinu.familing.domain.status.entity.Status;
import com.pinu.familing.global.error.CustomException;
import com.pinu.familing.global.error.ExceptionCode;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Objects;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "user_tb")
public class User extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 유저 아이디로 사용한다.
    @Column(unique = true)
    private String username;
    // 유저 닉네임 <- 가족에서 사용할 이름
    private String nickname;
    // 유저의 실제 이흠
    private String realname;
    //프로필
    private String profileImg;

    @Enumerated(value = EnumType.STRING)
    private Gender gender;

    @ManyToOne
    @JoinColumn(name = "family_id")
    private Family family;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private Status status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chat_room_id")
    private ChatRoom chatRoom;

    private String role;

    @Builder
    private User(String username, String nickname, String realname, String profileImg, String role, Gender gender, Family family) {
        this.username = username;
        this.nickname = nickname;
        this.realname = realname;
        this.profileImg = profileImg;
        this.role = role;
        this.gender = gender;
        this.family = family;
    }

    public void registerFamily(Family family) {
        if (this.family != null) {
            //가족 구성원이 이미 있는 경우
            throw new CustomException(ExceptionCode.ALREADY_HAVE_FAMILY);
        }
        this.family = family;
        family.addMember();
    }

    public boolean hasFamily() {
        return this.family != null;
    }

    public void registerChatRoom(ChatRoom chatRoom) {
        this.chatRoom = chatRoom;
    }

    public void updateNickname(Nickname nickname) {
        this.nickname = nickname.nickname();
    }

    public void updateRealname(Realname realname) {
        this.realname = realname.realname();
    }

    public void updateImageUrl(String profileImg) {
        this.profileImg = profileImg;
    }

    public void changeStatus(Status status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(username, user.username);
    }

    @Override
    public int hashCode() {
        return Objects.hash(username);
    }
}