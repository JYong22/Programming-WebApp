package com.example.fitness.Workouts;

import lombok.Data;

@Data
public class WorkoutExercise {
    private String exercise;
    private String weight;
    private String reps;
    private String sets;

    public WorkoutExercise(String exercise, String weight, String reps, String sets) {
        this.exercise = exercise;
        this.weight = weight;
        this.reps = reps;
        this.sets = sets;
    }
}
