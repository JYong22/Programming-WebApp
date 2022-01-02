import Header from '../header';
import * as React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import '../../css/workout.css';
import { createBreakpoints } from '@chakra-ui/theme-tools'
import {Button, ButtonGroup, Container, Select,Input,Box, Flex,Icon, Spacer,Text, Tabs,Tab, TabList, TabPanels, TabPanel,Stack,InputGroup,InputLeftAddon,InputRightAddon,Textarea,InputLeftElement} from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';
import { useEffect, useState, useRef } from 'react';
import WorkoutContent from './workoutContent';

import { AddIcon, CalendarIcon } from '@chakra-ui/icons';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import axios from 'axios';

  import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from '@chakra-ui/react'
  

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  });

function AddWorkout(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(false);


    const [workoutName, setWorkoutName] = useState('');
    const [addProgram, setAddProgramName] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [desc, setDesc] = useState('');
    useEffect(() =>{
        setLoading(true);
        axios.get(`http://localhost:8080/api/v1/programs`)
        .then(res =>{ 
            setPrograms(res.data);
        })
        .finally(() => {
            setLoading(false);
        });

    }, []);

    const addWorkout = () =>{
        const data = {
            username: "johnson",
            workoutName: workoutName,
            programName: addProgram,
            startDate: startDate,
            endDate: endDate,
            desc: desc

        }
        fetch('http://localhost:8080/api/v1/workouts/add', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
        },
            body: JSON.stringify(data),
        })
            .then(response => (response.json()))

            .then(data => {
                alert('Success:', data);
        })
            .catch((error) => {
                console.error('Error:', error);
        });
    }
    if (loading) {
        return <p>Data is loading...</p>;
    }
    return(
        <div>
            <Button leftIcon={<AddIcon />} w = '9rem' colorScheme='blue' onClick={onOpen}>
                Add Workout
            </Button>
            <Drawer
            isOpen={isOpen}
            placement='right'
            initialFocusRef={firstField}
            onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
                Add Workout
            </DrawerHeader>
            <form method = 'post' onSubmit={(e) =>{
                e.preventDefault();
                if (startDate < endDate){
                    addWorkout();
                    window.location.reload();
                }
                else
                    alert(startDate+ " is after " + endDate+".")
            }}>
                <DrawerBody>
                    <Stack spacing='24px'>
                    <Box>
                        <FormLabel htmlFor='workoutName'>Workout Name</FormLabel>
                        <Input
                        ref={firstField}
                        id='workOutName'
                        placeholder='Enter your workout name'
                        onChange={(e) =>{
                                setWorkoutName(e.target.value);
                            }}
                        />
                    </Box>

                    <Box>
                        <FormLabel htmlFor='workoutProgram'>Select Program</FormLabel>
                        <Select id='workoutProgram' 
                            defaultValue='PPL' 
                            onChange={(e) =>{
                                setAddProgramName(e.target.value);
                            }
                        }> 
                            {programs.map((v)=>{
                                return(
                                    <option key = {v.programName} value = {v.programName}>{v.programName}</option>
                                );
                            })}
                        </Select>
                    </Box>

                    <Box>
                        <FormLabel htmlFor='workoutDate'>Start Date</FormLabel>
                        <InputGroup>
                            <Input type='date' placeholder='Start Date' 
                                onChange={(e) =>{
                                    setStartDate(e.target.value);
                                }}
                            />
                        </InputGroup>
                    </Box>
                    <Box>
                        <FormLabel htmlFor='workoutDate'>End Date</FormLabel>
                        <InputGroup>
                            <Input type='date' placeholder='End Date' 
                                onChange={(e) =>{
                                    setEndDate(e.target.value);
                                }}
                            />
                        </InputGroup>
                    </Box>

                    <Box>
                        <FormLabel htmlFor='workoutDesc'>Description</FormLabel>
                        <Textarea id='workoutDesc' 
                            onChange={(e) =>{
                                    setDesc(e.target.value);
                                }}
                        />
                    </Box>
                    </Stack>
                </DrawerBody>

                <DrawerFooter borderTopWidth='1px'>
                    <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                    </Button>
                    <Button type = 'submit' colorScheme='blue'>Submit</Button>
                </DrawerFooter>
            </form>
            </DrawerContent>
            </Drawer>
        </div>
    );
}

export default AddWorkout;