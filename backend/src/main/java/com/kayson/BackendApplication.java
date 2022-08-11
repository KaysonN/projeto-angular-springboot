package com.kayson;

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.kayson.model.Order;
import com.kayson.repository.OrderRepository;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	CommandLineRunner initDataBase(OrderRepository orderRepository) {
		return args -> {
			orderRepository.deleteAll();
			
			Order order = new Order();
			order.setName("Alfajor");
			order.setCategory("Doce");
			
			orderRepository.saveAll(Arrays.asList(order));
			
		};
	}
}
