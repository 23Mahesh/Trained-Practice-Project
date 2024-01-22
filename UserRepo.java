package com.example.SpringDB1.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SpringDB1.Entity.User;

public interface UserRepo extends JpaRepository<User, Integer>{

}
