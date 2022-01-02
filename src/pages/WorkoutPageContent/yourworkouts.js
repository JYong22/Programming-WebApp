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
import AddWorkout from './AddWorkout';

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

function YourWorkout(){


    return(
        <div>
            <AddWorkout/>
            <div id = 'yourWorkoutContent'>
                <WorkoutContent/>
            </div>
        </div>
    );
}

export default YourWorkout;