package com.example.fitness.Program;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class ProgramService {
    private final ProgramRepository programRepository;
    public List<Program> getAllPrograms(){
        return programRepository.findAll();
    }

}
