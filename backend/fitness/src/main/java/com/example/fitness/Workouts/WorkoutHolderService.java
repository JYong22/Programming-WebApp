package com.example.fitness.Workouts;


import com.example.fitness.Program.Day;
import com.example.fitness.Program.ProgramRepository;
import com.mongodb.BasicDBObject;
import com.mongodb.client.result.UpdateResult;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class WorkoutHolderService {

    private final WorkoutHolderRepository workoutHolderRepository;
    private final ProgramRepository programRepository;
    MongoTemplate mongoTemplate;
    public WorkoutHolder getUserWorkouts(String username){
        List<Workout> EmptyList = Collections.<Workout>emptyList();
        if (workoutHolderRepository.existsByUsername(username)) {
        }
        else{
            WorkoutHolder workoutHolder = new WorkoutHolder(username,EmptyList);
            workoutHolderRepository.insert(workoutHolder);
        }
        return workoutHolderRepository.findByUsername(username);
    }

    public String updateUserWorkouts(AddWorkoutRequest addWorkoutRequest){
        System.out.println(addWorkoutRequest.getWorkoutName());
        System.out.println(addWorkoutRequest.getProgramName());
        System.out.println(addWorkoutRequest.getDesc());
        System.out.println(addWorkoutRequest.getEndDate());
        System.out.println(addWorkoutRequest.getStartDate());
        List<WorkoutDay> EmptyList = Collections.<WorkoutDay>emptyList();

        Workout workout = new Workout(
                addWorkoutRequest.getWorkoutName(),
                addWorkoutRequest.getProgramName(),
                addWorkoutRequest.getStartDate(),
                addWorkoutRequest.getEndDate(),
                addWorkoutRequest.getDesc(),
                EmptyList
        );
        Query query = new Query();
        query.addCriteria(Criteria.where("username").is(addWorkoutRequest.getUsername()));


        Update updateQuery = new Update();
        updateQuery.push("workoutList", workout);


        UpdateResult updateResult = mongoTemplate.updateFirst(query,updateQuery, WorkoutHolder.class);
        System.out.println(updateResult);

        return "Success";
    }
    public String updateWorkoutProgress(AddWorkoutDay addWorkoutDay){
        System.out.println(addWorkoutDay.getWorkoutDate());
        System.out.println(addWorkoutDay.getExercises());


        WorkoutExercise workoutExercise = new WorkoutExercise(
                "Bench press",
                "225, 275, 315",
                "5, 5, 5",
                "3"
        );
        WorkoutDay workoutDay = new WorkoutDay(
                addWorkoutDay.getWorkoutDate(),
                addWorkoutDay.getExercises()

        );

        Query query = new Query();
        query.addCriteria(
                Criteria.where("username").is(addWorkoutDay.getUsername())
                .and("workoutList.workoutName").is(addWorkoutDay.getWorkoutName())
        );

        Update updateQuery = new Update();
        updateQuery.push("workoutList.$.days", workoutDay);

        UpdateResult updateResult = mongoTemplate.updateFirst(query,updateQuery, WorkoutHolder.class);
        System.out.println(updateResult);



        return "success";

    }

}