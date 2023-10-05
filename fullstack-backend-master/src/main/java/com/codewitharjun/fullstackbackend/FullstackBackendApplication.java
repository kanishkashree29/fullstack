package com.codewitharjun.fullstackbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(
info =@Info(
		title = "Museum Management System",
	version = "1.1.2",
	description = "A museum management website is a web-based platform "
			+ "designed to facilitate the efficient and effective management of museums and "
			+ "their operations. It serves as a central hub for various tasks and activities related to museum"
			+ " administration, collections management, exhibition planning, visitor engagement, and more. The "
			+ "website provides a range of features and functionalities to support the day-to-day operations of a"
			+ " museum, enhance visitor experiences, and streamline administrative processes.",
	contact = @Contact(
			name = "Museum",
			email = "kratos@max.io"
			)
	)
)
public class FullstackBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(FullstackBackendApplication.class, args);
	}

}
