package com.pinu.familing;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class FamilingApplication {

	public static void main(String[] args) {
		SpringApplication.run(FamilingApplication.class, args);
	}

}
