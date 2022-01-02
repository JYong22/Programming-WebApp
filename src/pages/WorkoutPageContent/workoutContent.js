import Header from '../header';
import ProgressContent from './ProgressContent';
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
import { Grid, GridItem } from '@chakra-ui/react'


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

function WorkoutContent(){
    const [userWorkouts, setUserWorkouts] = useState([]);
    const [loading, setLoading] = useState(false);


    
    useEffect(() =>{
        setLoading(true);
        axios.get("http://localhost:8080/api/v1/workouts/user?username=johnson")
        .then(res =>{
            setUserWorkouts(res.data.workoutList);
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
        <Grid width = {['100vw', 'xl', '5xl']} marginLeft = {10} marginTop = {10} templateColumns={['repeat(1, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} gap={4}>
            {(userWorkouts).map((w)=>{
                return(
                <Box border = {'Solid black 2px'} padding={'5px'}>
                    {w.workoutName}
                    <div>
                        <Text>
                            Program Name: {w.program}
                        </Text>
                        <Text>
                            Desc:
                            <Text marginLeft={'5px'}>
                                {w.desc}
                            </Text>
                        </Text>
                        <Text>
                            Start Date: {w.startDate}
                        </Text>
                        <Text>
                            End Date: {w.endDate}
                        </Text>
                    </div>
                    <ProgressContent/>
                </Box>
                );
            })}
        </Grid>
        </div>
        
    );

}

export default WorkoutContent;