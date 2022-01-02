package com.example.fitness.Workouts;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

//this tracks all the days in the workout.
@Data
public class WorkoutDay {
    private LocalDate workoutDate;

    private List<WorkoutExercise> exercises;

    public WorkoutDay(LocalDate workoutDate, List<WorkoutExercise> exercises) {
        this.workoutDate = workoutDate;
        this.exercises = exercises;
    }

    public LocalDate getWorkoutDate() {
        return workoutDate;
    }

    public List<WorkoutExercise> getExercises() {
        return exercises;
    }
}
