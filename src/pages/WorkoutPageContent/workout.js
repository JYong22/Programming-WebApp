import Header from '../header';
import YourWorkout from './yourworkouts';
import OtherWorkouts from './otherworkouts';
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

import { AddIcon, CalendarIcon } from '@chakra-ui/icons';
import {useState, useEffect} from 'react';  
import axios from 'axios';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  });


function WorkoutPage(){
    const [sDisplay, setDisplay] = useState('');
    const [lDisplay, setLDisplay] = useState('');
    
    useEffect(() =>{
        if (localStorage.getItem('fitness') != null){
            setDisplay('block');
            setLDisplay('none');

        }
        else{
            setDisplay('none');
            setLDisplay('block')
        }
    })
    return(
        <div id = 'workoutPage'>
            <div class='headerBarWrap'>
                <Header/>
            </div>
            <Container centerContent marginTop={'2vh'} fontSize={['6xl']}>
                <Text style = {{display: lDisplay}}>Please Login to Continue</Text>
            </Container>
            <div style = {{display: sDisplay}}>
                <Tabs variant = 'enclosed' defaultIndex={0}>
                    <Flex direction = 'row'>
                    <div id = 'workout-tab'>
                        <TabList h = '87vh' maxHeight='100vh'>
                            <Flex direction='column'>
                                <Tab h = '4rem' paddingLeft={10} paddingRight={10}>Your Workouts</Tab>
                                <Tab h = '4rem'> View Other Workouts</Tab>
                            </Flex>
                        </TabList>
                    </div>
                        <TabPanels>
                            
                                <TabPanel>
                                    <YourWorkout/>
                                </TabPanel>
                                <TabPanel>
                                    <OtherWorkouts/>
                                </TabPanel>
                        </TabPanels>
                    </Flex>
                </Tabs>
            </div>
        </div>
        
    );
}

export default WorkoutPage;