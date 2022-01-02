
import Header from './header';
import YourWorkout from './WorkoutPageContent/yourworkouts';
import OtherWorkouts from './WorkoutPageContent/otherworkouts';
import * as React from 'react';
import { Center, useDisclosure, useProps } from '@chakra-ui/react';
import '../css/workout.css';
import { createBreakpoints } from '@chakra-ui/theme-tools'
import {Button, ButtonGroup, Container, Select,Input,Box, Flex,Icon, Spacer,Text, Tabs,Tab, TabList, TabPanels, TabPanel,Stack,InputGroup,InputLeftAddon,InputRightAddon,Textarea,InputLeftElement} from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';

import { AddIcon, CalendarIcon } from '@chakra-ui/icons';
import { Grid, GridItem } from '@chakra-ui/react'
import axios from 'axios';
  
const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
});

function ProgramsCard(props){
    
    return(
        <Center className = 'programs-cardBtn' border='2px solid #E2E8F0' fontWeight='bold' fontSize='2xl' onClick = {props.new}>
            {props.text}
        </Center>
    );
}

function DisplayProgram(props){


    return(
        <Box width = '55em' marginTop={10} marginLeft={10} border= '2px solid black'>
                <div>
                    <p>
                        Name: {props.p}
                    </p>
                    <Grid width = 'xl' marginLeft = {10} marginTop = {2} templateColumns='repeat(2, 1fr)' gap={4}>
                    {((props.d).day).map((d) =>{
                        return(
                            <Box w = 'sm' border= '2px solid black'>
                                Day: {d.dayName}
                                <p> Exercises:</p>
                                <Flex marginLeft = {10} marginTop = {1} direction='column'>
                                    {d.exercise.map((e) =>{
                                        return(
                                            <div>
                                            
                                                <p>{e.ename}</p>
                                                <Flex marginLeft = {10} direction='column'>
                                                    <p>Sets: {e.setRange}</p>
                                                    <p>Reps: {e.repRange}</p>
                                                </Flex>
                                            </div>
                                        );
                                    })}
                                </Flex>
                            </Box>
                        );
                    })}
                    </Grid>                 
                </div>
            </Box>
    );
}

function ProgramsPage(){
    const [programs, setPrograms] = React.useState([]);
    const [dis, setNum] = React.useState(0);
    const arr = ['lol'];

    React.useEffect(() =>{
        axios.get(`http://localhost:8080/api/v1/programs`)
        .then(res =>{ 
            console.log(res.data)
            setPrograms(res.data);
        })

    }, []);


    console.log(dis);

    
    return(
        <div >
            <Header/>
            <Text marginTop= '2.5em' marginLeft = '2.5em' fontSize='xl'>Click on a box to see the sample workouts for each program</Text>
            <Grid marginTop= '2.5em' marginLeft = '2.5em' width = '2xl' h = '5em' templateColumns='repeat(3, 1fr)' gap={6}>
                {programs.map((v) =>{
                    return(
                        <ProgramsCard text = {v.programName} new = {() => setNum(programs.indexOf(v))}/>
                    );
                    
                })}
            </Grid>
            {programs.slice(0,1).map(() =>{
                return(<DisplayProgram className = 'display-Programs' d = {programs[dis]} p = {programs[dis].programName} />);
            })
            
            }
            
            
        </div>
    );
}

export default ProgramsPage;