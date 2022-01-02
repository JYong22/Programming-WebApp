import Header from '../header';
import * as React from 'react';
import { propNames, useDisclosure } from '@chakra-ui/react';
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
import { Grid, GridItem } from '@chakra-ui/react'
import axios from 'axios';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

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
  


function ProgressContent(props){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [userWorkouts, setUserWorkouts] = useState([]);
    const [loading, setLoading] = useState(false);


    
    useEffect(() =>{
        setLoading(true);
        axios.get("http://localhost:8080/api/v1/workouts/user?username=johnson")
        .then(res =>{
            setUserWorkouts(res.data.workoutList[props.value].days);
        })
        .catch(error =>{
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [])
    console.log(userWorkouts);

    if (loading) {
        return <p>Data is loading...</p>;
    }

    return(
        <div>
            <Button onClick={onOpen} marginTop = '5px' colorScheme='blue'>Progress</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent >
                <ModalHeader>Progress</ModalHeader>
                <ModalCloseButton />
                <ModalBody >
                    {(userWorkouts).map((d) =>{
                        return(
                            <Box>
                                <div>
                                    <Text>
                                        Workout Date: {d.workoutDate}
                                    </Text>
                                    <Text>
                                        Exercises
                                    </Text>
                                </div>
                            
                            
                                <Table>
                                    <Thead>
                                        <Tr>
                                            <Th>
                                                Exercise
                                            </Th>
                                            <Th>
                                                Weight
                                            </Th>
                                            <Th>
                                                Sets
                                            </Th>
                                            <Th>
                                                Reps
                                            </Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                    {(d.exercises).map((e) =>{
                                        return(
                                            <Tr>
                                                <Td>
                                                    {e.exercise}
                                                </Td>
                                                <Td>
                                                    {e.weight}
                                                </Td>
                                                <Td>
                                                    {e.sets}
                                                </Td>
                                                <Td>
                                                    {e.reps}
                                                </Td>
                                            </Tr>
                                        );
                                    })}
                                    </Tbody>
                                </Table>
                            </Box>
                        );
                    
                    })}
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
            
        </div>
    );
}

export default ProgressContent;