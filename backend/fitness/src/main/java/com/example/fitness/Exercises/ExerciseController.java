package com.example.fitness.Exercises;

import com.mashape.unirest.http.HttpResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;


@RestController
@CrossOrigin("*")
@AllArgsConstructor
@RequestMapping("api/v1/exercise")

public class ExerciseController {

    @GetMapping
    public List <Object> getExercises(){
        //url
        String url = "https://exercisedb.p.rapidapi.com/exercises";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();

        //headers
        headers.add("x-rapidapi-host", "******");
        headers.add("x-rapidapi-key", "*****");


        //set headers on entity
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<>("body", headers);


        //response
        ResponseEntity<Object[]> exercises = restTemplate.exchange(url, HttpMethod.GET, entity, Object[]. class);

        return Arrays.asList(exercises);

    }

}
