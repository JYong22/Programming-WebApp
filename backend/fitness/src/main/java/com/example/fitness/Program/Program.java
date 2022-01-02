package com.example.fitness.Program;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document
public class Program {
    @Id
    private String id;
    private String programName;
    private List<Day> day;

    public Program(String programName, List<Day> day) {
        this.programName = programName;
        this.day = day;
    }
}

