package com.example.fitness.login.controllers;

import com.example.fitness.login.models.User;
import com.example.fitness.login.payload.request.LoginRequest;
import com.example.fitness.login.payload.request.SignupRequest;
import com.example.fitness.login.payload.response.MessageResponse;
import com.example.fitness.login.payload.response.UserInfoResponse;
import com.example.fitness.login.repository.UserRepository;
import com.example.fitness.login.security.jwt.JwtUtils;
import com.example.fitness.login.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RestController
@RequestMapping("/api/v1")
public class AuthController {
  @Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  UserRepository userRepository;
  @Autowired
  PasswordEncoder encoder;

  @Autowired
  JwtUtils jwtUtils;

  @PostMapping(value = "/signin")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
    System.out.println(loginRequest.getUsername());
    System.out.println(loginRequest.getPassword());

    loginRequest.setUsername(loginRequest.getUsername().toLowerCase());

    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);

    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

    ResponseCookie jwtCookie = jwtUtils.generateJwtCookie(userDetails);


    return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
        .body(new UserInfoResponse(userDetails.getId(),
                                   userDetails.getUsername()
                                   ));

  }

  @PostMapping("/signup")
  public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
    System.out.println(signUpRequest.getUsername());
    System.out.println(signUpRequest.getPassword());

    if (signUpRequest.getUsername().length() < 3){ //if length of username < 3
      return ResponseEntity
              .badRequest()
              .body(new MessageResponse("Error: Username is too small!"));

    }
    if (signUpRequest.getPassword().length() < 6){ //if length of password < 6
      return ResponseEntity
              .badRequest()
              .body(new MessageResponse("Error: Password is too small!"));

    }
    signUpRequest.setUsername(signUpRequest.getUsername().toLowerCase());
    System.out.println(signUpRequest.getUsername());
    if (userRepository.existsByUsername(signUpRequest.getUsername())) { //if user taken
      return ResponseEntity
          .badRequest()
          .body(new MessageResponse("Error: Username is already taken!"));
    }


    // Create new user's account
    User user = new User(signUpRequest.getUsername(),
                         encoder.encode(signUpRequest.getPassword()));



    userRepository.save(user);

    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
  }
}
