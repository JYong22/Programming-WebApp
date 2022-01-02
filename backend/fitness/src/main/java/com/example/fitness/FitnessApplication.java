package com.example.fitness;

import com.example.fitness.Program.Day;
import com.example.fitness.Program.ProgramRepository;
import com.example.fitness.Workouts.*;
import com.example.fitness.Workouts.WorkoutHolderRepository;

import com.mongodb.client.result.UpdateResult;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import java.util.List;
import java.time.LocalDate;

@SpringBootApplication
public class FitnessApplication {

	public static void main(String[] args) {
		SpringApplication.run(FitnessApplication.class, args);
	}


	@Bean
	CommandLineRunner runner(ProgramRepository repository, MongoTemplate mongoTemplate){
		return args ->{


		};
	}

	@Bean
	CommandLineRunner runner(WorkoutHolderRepository repository, MongoTemplate mongoTemplate, ProgramRepository repos){
		return args ->{



		};
	}



}
