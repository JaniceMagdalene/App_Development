package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.constant.Api;
import com.example.demo.model.Feedback;
import com.example.demo.service.FeedbackService;

@CrossOrigin
@RestController
@RequestMapping(Api.FEEDBACK)
public class FeedbackController {
	@Autowired
	FeedbackService feedService;
		
		@PostMapping("/add")
		public ResponseEntity<Feedback> create(final @RequestBody Feedback users){
			Feedback createUser=feedService.create(users);
			return ResponseEntity.ok(createUser);
		}
		
}
