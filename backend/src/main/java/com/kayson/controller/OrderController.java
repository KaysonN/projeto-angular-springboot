package com.kayson.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kayson.model.Order;
import com.kayson.repository.OrderRepository;

@RestController
@RequestMapping("/api/courses")
public class OrderController {

	@Autowired
	private OrderRepository orderRepository;

	@GetMapping
	public List<Order> list() {
		return orderRepository.findAll();
	}
}
