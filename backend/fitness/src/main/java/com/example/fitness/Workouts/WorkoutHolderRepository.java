package com.example.fitness.Workouts;

import com.example.fitness.login.models.User;
import com.mongodb.BasicDBObject;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WorkoutHolderRepository extends MongoRepository<WorkoutHolder, String> {

    WorkoutHolder findByUsername(String username);
    Boolean existsByUsername(String username);


}
