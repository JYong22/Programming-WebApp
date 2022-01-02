package com.example.fitness.login.payload.request;

import lombok.ToString;
import lombok.extern.java.Log;

import javax.validation.constraints.NotBlank;

@ToString
public class LoginRequest {
  @NotBlank
  private String username;

  @NotBlank
  private String password;

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
}
