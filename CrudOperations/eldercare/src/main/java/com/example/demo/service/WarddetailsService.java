package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Warddetails;
import com.example.demo.repository.WarddetailsRepo;

@Service
public class WarddetailsService {
	@Autowired
  	WarddetailsRepo userRepository;
  	public Warddetails create(Warddetails users) {
  		return userRepository.save(users);
  	}
  	public Optional<Warddetails> read(Long id){
  		return userRepository.findById(id);
  	}
  	public Warddetails update(Warddetails users) {
  		return userRepository.save(users);
  		
  	}
  	public void delete(Long Id) {
  		userRepository.deleteById(Id);
  	}
  	
}
