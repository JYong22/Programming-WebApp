import Header from './header';
import YourWorkout from './WorkoutPageContent/yourworkouts';
import OtherWorkouts from './WorkoutPageContent/otherworkouts';
import * as React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import '../css/workout.css';
import { createBreakpoints } from '@chakra-ui/theme-tools'
import {Button,Image, ButtonGroup, Container, Select,Input,Box, Flex,Icon, Spacer,Text, Tabs,Tab, TabList, TabPanels, TabPanel, Grid,Stack,InputGroup,InputLeftAddon,InputRightAddon,Textarea,InputLeftElement} from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';
import axios from 'axios';
import { AddIcon, CalendarIcon } from '@chakra-ui/icons';
  

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
});
function DisplayExercises(props){
    const [exercises, setExercises] = React.useState([]);
    React.useEffect(() =>{
        axios.get(`http://localhost:8080/api/v1/exercise`)
        .then(res =>{ 
            console.log(res.data[0].body)
            setExercises(res.data[0].body);
        })

    }, []);
    return(
        <Grid width = '6xl' marginLeft = {10} templateColumns='repeat(4, 1fr)' gap={4}>
            {exercises.map((v)=>{
                if(v.bodyPart == props.data){
                    return(
                        <Box border = '2px solid #E2E8F0'>
                            <Box margin={2}>
                                <p><span style = {{fontWeight: "bold"}}>Exercise:</span> {v.name}</p>
                                <br/>
                                <p><span style = {{fontWeight: "bold"}}>Equipment:</span> {v.equipment}</p>
                                <p><span style = {{fontWeight: "bold"}}>Target Muscle:</span> {v.target}</p>
                                <br/>
                                <Image src={v.gifUrl} alt='exercise gif' />
                            </Box>
                        </Box>
                    );
                };
            })}

        </Grid>
    );
}

function ExercisePage(){
    return(
        <div id = 'exercisePage' maxWidth='100%'>
            <div class='headerBarWrap'>

                <Header/>
            </div>
            <Tabs variant = 'enclosed' defaultIndex={0}>
                <Flex direction = 'row'>
                <div id = 'exercise-tab' >
                    <TabList h = '88vh'>
                        <Flex direction='column'>
                            <Tab h = '4rem' paddingLeft={10} paddingRight={10}>Chest</Tab>
                            <Tab h = '4rem'> Back</Tab>
                            <Tab h = '4rem'> Shoulders</Tab>
                            <Tab h = '4rem'> Upper Arms</Tab>
                            <Tab h = '4rem'> Lower Arms</Tab>
                            <Tab h = '4rem'> Waist</Tab>
                            <Tab h = '4rem'> Upper Legs</Tab>
                            <Tab h = '4rem'> Lower Legs</Tab>
                        </Flex>
                    </TabList>
                </div>
                    <TabPanels>
                        
                        <TabPanel>
                            <DisplayExercises data = 'chest'/>
                        </TabPanel>
                        <TabPanel>
                                <DisplayExercises data = 'back'/>
                            </TabPanel>
                            <TabPanel>
                                <DisplayExercises data = 'shoulders'/>
                            </TabPanel>
                            <TabPanel>
                                <DisplayExercises data = 'upper arms'/>
                            </TabPanel>
                            <TabPanel>
                                <DisplayExercises data = 'lower arms'/>
                            </TabPanel>
                            <TabPanel>
                                <DisplayExercises data = 'waist'/>
                            </TabPanel>
                            <TabPanel>
                                <DisplayExercises data = 'upper legs'/>
                            </TabPanel>
                            <TabPanel>
                                <DisplayExercises data = 'lower legs'/>
                            </TabPanel>
                    </TabPanels>
                </Flex>
            </Tabs>
        
        </div>
        
    );
}

export default ExercisePage;