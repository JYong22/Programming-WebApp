import Header from "./header";
import { createBreakpoints } from '@chakra-ui/theme-tools'

import {Button, Grid, ButtonGroup, Container, Select,Input,Box, Flex,Icon, Spacer,Text} from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { useState } from "react";
import axios from "axios";


const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

function Signout(props){
    
    const signout = () =>{
        localStorage.clear();
        document.getElementById('signout').style.display = 'none';
        window.location.reload();

    }
    return(
        <div id = 'signout' style = {props.dis}>
            <Flex align = 'center' bgColor = 'brand.100' h = '5vh' w = '100vw'>
                <Flex h = '5vh' w = '10vw' marginLeft = {[5,10,10]} align='center'>
                    <Text>Hello</Text>
                    <Text marginLeft={1}>{props.name}</Text>
                </Flex>
                <Box w = '80vw'></Box>
                <Flex h = '5vh' >
                    <Button onClick = {signout} marginRight = {[5,10,10]}h = '5vh' w= '10vw'>Sign Out</Button>
                </Flex>
            </Flex>

        </div>
    );
}
export default Signout;