package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Feedback;
import com.example.demo.repository.FeedbackRepo;

@Service
public class FeedbackService {
	@Autowired
  	FeedbackRepo feedRepository;
  	public Feedback create(Feedback users) {
  		return feedRepository.save(users);
  	}
}
