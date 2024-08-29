package com.pinu.familing.domain.chat.config;

import com.google.common.collect.ImmutableMap;
import com.pinu.familing.domain.chat.entity.Message;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.support.serializer.JsonSerializer;

import javax.management.Notification;
import java.util.Map;

@EnableKafka
@Configuration
public class ProducerConfig {

    @Value("${kafka.server}")
    private String kafkaServer;

    // Kafka ProducerFactory를 생성하는 Bean 메서드
    // ProducerFactory는 Kafka 프로듀서를 생성하는 데 사용되는 Spring Kafka의 인터페이스입니다
    @Bean
    public ProducerFactory<String, Message> chatProducerFactory() {
        return new DefaultKafkaProducerFactory<>(chatProducerConfigurations());
    }

    // Kafka Producer 구성을 위한 설정값들을 포함한 맵을 반환하는 메서드
    @Bean
    public Map<String, Object> chatProducerConfigurations() {
        return ImmutableMap.<String, Object>builder()
                .put(org.apache.kafka.clients.producer.ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, kafkaServer)
                .put(org.apache.kafka.clients.producer.ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class)
                .put(org.apache.kafka.clients.producer.ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class)
                .build();
    }

    // KafkaTemplate을 생성하는 Bean 메서드
    @Bean
    public KafkaTemplate<String, Message> chatKafkaTemplate() {
        return new KafkaTemplate<>(chatProducerFactory());
    }

    // 채팅 메시지 알림을 위한 kafka 설정
    @Bean
    public ProducerFactory<String, Notification> notificationProducerFactory() {
        return new DefaultKafkaProducerFactory<>(notificationProducerConfigurations());
    }

    @Bean
    public Map<String, Object> notificationProducerConfigurations() {
        return ImmutableMap.<String, Object>builder()
                .put(org.apache.kafka.clients.producer.ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, kafkaServer)
                .put(org.apache.kafka.clients.producer.ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class)
                .put(org.apache.kafka.clients.producer.ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class)
                .build();
    }

    @Bean
    public KafkaTemplate<String, Notification> notificationKafkaTemplate() {
        return new KafkaTemplate<>(notificationProducerFactory());
    }
}