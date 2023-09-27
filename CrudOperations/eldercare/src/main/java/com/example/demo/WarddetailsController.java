package com.example.demo;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Warddetails;
import com.example.demo.service.WarddetailsService;
import com.fasterxml.jackson.core.JsonProcessingException;

@RestController
public class WarddetailsController {
WarddetailsService userService;
	
	@PostMapping("/post")
	public ResponseEntity<Warddetails> create(final @RequestBody Warddetails users){
		Warddetails createUser=userService.create(users);
		return ResponseEntity.ok(createUser);
	}
	
	@GetMapping("/user")
	public ResponseEntity<Optional<Warddetails>> read(final @PathVariable Long id){
		Optional<Warddetails> createdCandidate=userService.read(id);
		return ResponseEntity.ok(createdCandidate);
	}
	
	@PutMapping("/put")
	public ResponseEntity<Warddetails> update(final @RequestBody Warddetails user)throws  JsonProcessingException{
		final Warddetails updatedUser=userService.update(user);
		return ResponseEntity.ok(updatedUser);
	}
	
	@DeleteMapping("/delete")
	public void delete(final @PathVariable Long id) {
		userService.delete(id);
	}
}
