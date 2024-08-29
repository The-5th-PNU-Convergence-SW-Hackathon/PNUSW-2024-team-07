package com.pinu.familing.domain.chat.entity;

import com.pinu.familing.domain.BaseEntity;
import com.pinu.familing.domain.user.entity.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChatRoom extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chat_room_id")
    private Long id;

    @NotNull(message = "채팅방 생성시 가족코드는 필수입니다.")
    @Column(unique = true)
    private String validCode;

    @Builder.Default
    @OneToMany(mappedBy = "chatRoom")
    private List<User> users = new ArrayList<>();

    public void addUser(User user) {
        System.out.println(user.getId());
        this.users.add(user);
        user.registerChatRoom(this);
    }

}