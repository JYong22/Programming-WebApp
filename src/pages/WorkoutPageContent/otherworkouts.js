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

import { AddIcon, CalendarIcon, SearchIcon } from '@chakra-ui/icons';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
});

function OtherWorkouts(){
    return(
        <div>
            <Box>
                
                <FormLabel htmlFor='workoutName'>Workout Name</FormLabel>
                <InputGroup w = 'sm'>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='gray.300' />}
                        />                    
                    <Input id='workOutName' placeholder='Search for Username'/>
                </InputGroup>

            </Box>

        </div>
    );
}

export default OtherWorkouts;