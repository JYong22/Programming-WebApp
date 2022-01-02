package com.example.fitness.calculate;
import lombok.AllArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/calculaterm")
@AllArgsConstructor
public class calculateController {
    public List<Calculation> calcList;

    @GetMapping
    public List <Calculation> getCalculation(@RequestParam("weight") int weight, @RequestParam("reps") int reps){
        if (!calcList.isEmpty())
            calcList.clear();
        double one = (weight / (1.0278 - 0.0278 * reps));
        int onerm = (int)one;
        calcList.add(new Calculation("1RM",onerm));
        calcList.add(new Calculation("2RM",(int) (onerm*0.95)));
        calcList.add(new Calculation("3RM",(int) (onerm*0.953)));
        calcList.add(new Calculation("4RM",(int) (onerm*0.90)));
        calcList.add(new Calculation("5RM",(int) (onerm*0.87)));
        calcList.add(new Calculation("6RM",(int) (onerm*0.85)));
        calcList.add(new Calculation("7RM",(int) (onerm*0.83)));
        calcList.add(new Calculation("8RM",(int) (onerm*0.80)));
        calcList.add(new Calculation("9RM",(int) (onerm*0.77)));
        calcList.add(new Calculation("10RM",(int) (onerm*0.75)));
        calcList.add(new Calculation("11RM",(int) (onerm*0.73)));
        calcList.add(new Calculation("12RM",(int) (onerm*0.70)));

        return calcList;



    }
}
