package com.example.SpringDB1.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringDB1.Entity.User;
import com.example.SpringDB1.Repository.UserRepo;

@RestController
@RequestMapping("/user/")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	UserRepo userRepo;
	
	// create the data
	@PostMapping("postUser")
	public User inserData(@RequestBody User user) {
		return userRepo.save(user);
	}
	
	// retrieve all data
	@GetMapping("getUser")
	public List<User> getAllData(){
		return userRepo.findAll();
	}
	
	// retrieve by ID
	@GetMapping("getUser/{id}")
	public User getDataById(@PathVariable int id) {
		Optional<User> users = userRepo.findById(id);
		return users.get();
	}
	
	// Update the data
	@PutMapping("updateUser/{id}")
	public User updateDataById(@PathVariable int id, @RequestBody User user) {
		Optional<User> users = userRepo.findById(id);
		if(users.isPresent()) {
			User existsID = users.get();
			existsID.setName(user.getName());
			existsID.setEmail(user.getEmail());
			existsID.setPassword(user.getPassword());
			existsID.setContact(user.getContact());
			return userRepo.save(existsID);
		}
		else {
			return null;
		}
	}
	
	// Delete by ID
	@DeleteMapping("delUser/{id}")
	public void deleteById(@PathVariable int id) {
		userRepo.deleteById(id);
	}
}
