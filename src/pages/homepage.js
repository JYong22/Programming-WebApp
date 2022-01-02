import Header from './header';
import React from 'react';
import { createBreakpoints } from '@chakra-ui/theme-tools'

import {Button, ButtonGroup, Container, Select,Input,Box, Flex,Icon, Spacer,Text} from '@chakra-ui/react';

import '../css/homepage.css';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })
  

class HomePage extends React.Component{

    render(){
        return(
        <div id = 'homepage'>
            <Header/>
            <div id = 'homepage-background'>
                <div id="homepage-rectangle"></div>

                <Container maxW='container.lg' centerContent >
                    <Flex align='center' justify='center' marginTop ='15vh'>
                        <Text  color = 'brand.50' fontWeight = 'bold' fontSize={{ base: '10vw', md: '7vw', lg: '6xl' }}>
                            <span > Create, Compare and Track your</span> <span id = 'spantext2'> Workouts </span>
                        </Text>
                        <span id = 'homeWeight' class="material-icons">fitness_center </span>  
                    </Flex>
                    
                </Container>

            </div>
            
        </div>
        );
    }
}

export default HomePage;