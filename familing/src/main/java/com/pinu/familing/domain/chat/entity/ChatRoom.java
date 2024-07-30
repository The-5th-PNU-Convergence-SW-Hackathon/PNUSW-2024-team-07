package com.pinu.familing.domain.chat.entity;

import com.pinu.familing.domain.BaseEntity;
import com.pinu.familing.domain.user.entity.User;
import jakarta.persistence.*;
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

    private String validCode;

    @OneToMany(mappedBy = "chatRoom")
    private List<User> users = new ArrayList<>();

    public void addUser(User user) {
        System.out.println(user.getId());
        this.users.add(user);
        user.registerChatRoom(this);
    }

}