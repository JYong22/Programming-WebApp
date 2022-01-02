package com.example.fitness.Workouts;
import com.example.fitness.Program.Program;
import com.example.fitness.Program.ProgramRepository;
import com.example.fitness.login.models.User;
import com.example.fitness.login.payload.request.SignupRequest;
import com.example.fitness.login.payload.response.MessageResponse;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.result.UpdateResult;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.resource.spi.work.Work;
import javax.validation.Valid;
import java.util.Collection;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/workouts")
@AllArgsConstructor
public class WorkoutHolderController {
    List<Workout> list;
    @Autowired
    private final WorkoutHolderService workoutHolderService;


    @GetMapping("/user")
    public WorkoutHolder findUserWorkout(@RequestParam("username") String username){
        return workoutHolderService.getUserWorkouts(username);
    }


    @PostMapping("/add")
    public String UpdateUserWorkout(@RequestBody AddWorkoutRequest addWorkoutRequest){
        return workoutHolderService.updateUserWorkouts(addWorkoutRequest);
    }
    @PostMapping("/addDay")
    public String AddWorkoutDay(@RequestBody AddWorkoutDay addWorkoutDay){
        return workoutHolderService.updateWorkoutProgress(addWorkoutDay);
    }



}
