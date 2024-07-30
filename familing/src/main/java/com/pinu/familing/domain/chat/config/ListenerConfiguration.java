package com.pinu.familing.domain.chat.config;

import com.google.common.collect.ImmutableMap;
import com.pinu.familing.domain.chat.entity.Message;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.support.serializer.JsonDeserializer;

import java.util.Map;


@Configuration
@EnableKafka
public class ListenerConfiguration {

    // KafkaListener 컨테이너 팩토리를 생성하는 Bean 메서드
    @Bean
    ConcurrentKafkaListenerContainerFactory<String, Message> kafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, Message> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactory());
        return factory;
    }

    // Kafka ConsumerFactory를 생성하는 Bean 메서드
    @Bean
    public ConsumerFactory<String, Message> consumerFactory() {
        JsonDeserializer<Message> deserializer = new JsonDeserializer<>(Message.class);
        // 패키지 신뢰 오류로 인해 모든 패키지를 신뢰하도록 작성
        deserializer.addTrustedPackages("*");

        // Kafka Consumer 구성을 위한 설정값들을 설정 -> 변하지 않는 값이므로 ImmutableMap을 이용하여 설정
        Map<String, Object> consumerConfigurations =
                ImmutableMap.<String, Object>builder()
                        //Kafka 클러스터의 주소를 설정합니다.
                        .put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092")
                        //이 그룹 ID는 Consumer가 동일한 그룹 내에서 협력하여 메시지를 처리하도록 합니다.
                        .put(ConsumerConfig.GROUP_ID_CONFIG, "familing")
                        //afka에서 수신한 메시지의 키를 역직렬화하는 데 사용됩니다.
                        .put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class)
                        //JsonDeserializer를 사용하여 JSON 형식의 메시지를 Java 객체로 변환합니다.
                        .put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, deserializer)
                        //ConsumerConfig.AUTO_OFFSET_RESET_CONFIG는 오프셋이 없거나 현재 오프셋이 없는 경우에 새 오프셋을 설정하는 방법을 지정합니다.
                        // "latest"는 가장 최근의 메시지부터 읽기 시작함을 의미합니다
                        .put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "latest")
                        .build();

        return new DefaultKafkaConsumerFactory<>(consumerConfigurations, new StringDeserializer(), deserializer);
    }

}

