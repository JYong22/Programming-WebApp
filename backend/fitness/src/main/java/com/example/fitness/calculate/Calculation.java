package com.example.fitness.calculate;
import lombok.Data;


@Data
public class Calculation {
    private String calc;
    private int calculation;

    public Calculation(String calc, int calculation) {
        this.calc = calc;
        this.calculation = calculation;
    }

}
