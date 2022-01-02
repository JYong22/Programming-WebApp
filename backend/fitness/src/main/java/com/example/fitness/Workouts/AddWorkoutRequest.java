package com.example.fitness.Workouts;

import com.example.fitness.Program.Program;
import com.example.fitness.Program.ProgramRepository;
import com.example.fitness.login.models.User;
import com.example.fitness.login.repository.UserRepository;
import lombok.ToString;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

@ToString
public class AddWorkoutRequest {
    UserRepository userRepository;
    ProgramRepository programRepository;
    @NotBlank
    private String username;

    @NotBlank
    private String workoutName;

    private Program program;

    @NotBlank
    private String programName;

    @NotBlank
    private LocalDate startDate;

    @NotBlank
    private LocalDate endDate;

    @NotBlank
    private String desc;

    public AddWorkoutRequest(String username, String workoutName, String programName, LocalDate startDate, LocalDate endDate, String desc) {
        this.username = username;
        this.workoutName = workoutName;
        this.programName = programName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.desc = desc;
    }


    public void setProgram() {
        program = programRepository.findByProgramName(programName);
    }

    public String getUsername() {
        return username;
    }

    public String getWorkoutName() {
        return workoutName;
    }

    public Program getProgram() {
        return program;
    }

    public String getProgramName() {
        return programName;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public String getDesc() {
        return desc;
    }
}
