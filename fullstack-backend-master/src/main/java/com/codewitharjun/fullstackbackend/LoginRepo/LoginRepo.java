package com.codewitharjun.fullstackbackend.LoginRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewitharjun.fullstackbackend.loginModel.loginModel;

public interface LoginRepo extends JpaRepository<loginModel, Integer> {

	loginModel findByUsername(String username);

	

}
