package com.example.fitness.Program;
import lombok.Data;

import java.util.List;

@Data
public class Day {
    private String dayName;
    private List<Exercise> exercise;

    public Day(String dayName, List<Exercise> exercise) {
        this.dayName = dayName;
        this.exercise = exercise;
    }
}
