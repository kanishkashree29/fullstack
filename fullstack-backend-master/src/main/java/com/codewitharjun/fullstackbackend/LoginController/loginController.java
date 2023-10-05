package com.codewitharjun.fullstackbackend.LoginController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.codewitharjun.fullstackbackend.LoginService.loginService;
import com.codewitharjun.fullstackbackend.loginModel.loginModel;

import io.swagger.v3.oas.annotations.tags.Tag;


@RestController
@RequestMapping("/user")
@CrossOrigin
public class loginController {
	@Autowired
	public loginService lserv;
	@Tag(name = "Get Login Data",description = "get Details by username and password")
	@GetMapping("/log/{username}/{password}")
	public boolean login(@PathVariable String username,@PathVariable String password)
	{
		boolean result=lserv.checkLogin(username,password);
		return result;
	}
	//signup
	@Tag(name = "Post Login data",description = "Post Details")
	@PostMapping("/adduser")
	public loginModel AddUser(@RequestBody loginModel cl)
	{
		return lserv.addUser(cl);
	}
	@Tag(name = "Get data",description = "Get Details")
	@GetMapping("/showall")
	public List<loginModel> listAll()
	{
		return lserv.getUser();
	}
	
	
	
	
	

}
