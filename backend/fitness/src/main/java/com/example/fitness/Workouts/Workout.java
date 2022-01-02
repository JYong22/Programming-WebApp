package com.example.fitness.Workouts;

import com.example.fitness.Program.Program;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

//this is one particular workout.
@Data
public class Workout {
    private String workoutName;
    private String program;
    private LocalDate startDate;
    private LocalDate endDate;
    private String desc;
    private List<WorkoutDay> days;

    public Workout(String workoutName, String program, LocalDate startDate, LocalDate endDate, String desc, List<WorkoutDay> days) {
        this.workoutName = workoutName;
        this.program = program;
        this.startDate = startDate;
        this.endDate = endDate;
        this.desc = desc;
        this.days = days;
    }
}
