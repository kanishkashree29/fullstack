package com.codewitharjun.fullstackbackend.loginModel;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="loginmuseum")
public class loginModel {
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private int id;
		private String username;
		private String password;
	
		private String email;
		private int age;
		public loginModel() {
			// TODO Auto-generated constructor stub
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public int getAge() {
			return age;
		}
		public void setAge(int age) {
			this.age = age;
		}
		@Override
		public String toString() {
			return "loginModel [id=" + id + ", username=" + username + ", password=" + password + ", email=" + email
					+ ", age=" + age + "]";
		}
		
		
		
		
		
		
		


}
