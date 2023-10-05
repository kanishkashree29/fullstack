package com.codewitharjun.fullstackbackend.LoginService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codewitharjun.fullstackbackend.LoginRepo.LoginRepo;
import com.codewitharjun.fullstackbackend.loginModel.loginModel;

@Service
public class loginService {
	@Autowired
	public LoginRepo lrepo;
	public boolean checkLogin(String username,String psword)
	{
		loginModel user= lrepo.findByUsername(username);
		System.out.print(user);
		if(user==null)
		{
			return false;
		}
		else
		{
			if(user.getPassword().equals(psword))
			{
				return true;
			}
			else
			{
				return false;
			}
		}
	}
	
	public loginModel addUser(loginModel cl)
	{
		return lrepo.save(cl);
	}
	
	public List<loginModel> getUser()
	{
		return lrepo.findAll();
	}
	
	public loginModel findByUsername(String username) {
	    return lrepo.findByUsername(username);
	  }
	
	

}
