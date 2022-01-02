package com.example.fitness.Workouts;

import java.time.LocalDate;
import java.util.List;

public class AddWorkoutDay {
    String username;
    String workoutName;
    private LocalDate workoutDate;

    private List<WorkoutExercise> exercises;

    public AddWorkoutDay(String username, String workoutName, LocalDate workoutDate, List<WorkoutExercise> exercises) {
        this.username = username;
        this.workoutName = workoutName;
        this.workoutDate = workoutDate;
        this.exercises = exercises;
    }

    public String getUsername() {
        return username;
    }

    public String getWorkoutName() {
        return workoutName;
    }

    public LocalDate getWorkoutDate() {
        return workoutDate;
    }

    public List<WorkoutExercise> getExercises() {
        return exercises;
    }
}
