package com.example.fitness.Workouts;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

//this holds all the workouts for a particular user
@Data
@Document(collection = "workoutholder")
public class  WorkoutHolder {
    @Id
    private String id;
    private String username;
    private List<Workout> workoutList;

    public WorkoutHolder(String username, List<Workout> workoutList) {
        this.username = username;
        this.workoutList = workoutList;
    }
}
