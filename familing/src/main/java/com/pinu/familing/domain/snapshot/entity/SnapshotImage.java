package com.pinu.familing.domain.snapshot.entity;

import com.pinu.familing.domain.BaseEntity;
import com.pinu.familing.domain.user.entity.User;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor
public class SnapshotImage extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "snapshot_id", nullable = false)
    private Snapshot snapshot;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private LocalDate date;

    @Column(nullable = false)
    private String imageUrl;


    @Builder
    public SnapshotImage(Snapshot snapshot, User user, LocalDate date) {
        this.snapshot = snapshot;
        this.user = user;
        this.imageUrl = "EMPTY";
        this.date = date;
    }

    public void updateImage(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return "SnapshotImage { " +
                "id=" + id +
                ", snapshot=" + snapshot +
                ", user=" + user +
                ", date=" + date +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
}
