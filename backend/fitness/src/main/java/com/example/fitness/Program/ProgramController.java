package com.example.fitness.Program;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/programs")
@AllArgsConstructor
public class ProgramController {
    private final ProgramService programService;


    @GetMapping
    public List<Program> fetchAllPrograms(){
        return programService.getAllPrograms();
    }
}
