package com.example.fitness.Program;
import lombok.Data;


@Data
public class Exercise {
    private String eName;
    private String setRange;
    private String repRange;

    public Exercise(String eName, String setRange, String repRange) {
        this.eName = eName;
        this.setRange = setRange;
        this.repRange = repRange;
    }
}
