package com.pinu.familing.domain.snapshot.entity;

import com.pinu.familing.domain.BaseEntity;
import com.pinu.familing.domain.user.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
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
    private String snapshotImg;


    @Builder
    public SnapshotImage(Snapshot snapshot, User user, String snapshotImg,LocalDate date) {
        this.snapshot = snapshot;
        this.user = user;
        this.snapshotImg = snapshotImg;
        this.date = date;
    }

    public void updateImage(String snapshotImg) {
        this.snapshotImg = snapshotImg;
    }

    @Override
    public String toString() {
        return "SnapshotImage { " +
                "id=" + id +
                ", snapshot=" + snapshot +
                ", user=" + user +
                ", date=" + date +
                ", imageUrl='" + snapshotImg + '\'' +
                '}';
    }

}
