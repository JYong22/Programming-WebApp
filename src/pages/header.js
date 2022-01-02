import '../css/header.css';
import { Link } from "react-router-dom";
import {Button, ButtonGroup, Container, Select,Input,Box, Flex,Icon, Spacer,Menu,MenuButton,MenuItem,MenuDivider,MenuList, propNames} from '@chakra-ui/react';
import { HamburgerIcon} from '@chakra-ui/icons'

import { createBreakpoints } from '@chakra-ui/theme-tools';
import Signout from './signoutBar';
import { useEffect, useState } from 'react';

// This is the default breakpoint
const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
})


function Header(){
    const [sDisplay, setDisplay] = useState('');
    useEffect(() =>{
        if (localStorage.getItem('fitness') != null){
            setDisplay('block');
        }
        else{
            setDisplay('none');
        }
    })
    return(
        <div id = "header">
            <Flex w = '100vw' h = '12vh' bg = 'white' justify='center' align = 'center' direction='row'>
            
                <Flex id = 'header-title' direction='row' justify='center' align = 'center' marginLeft="2.5%">
                    
                    <Link to="/">
                        <Box  fontSize={['12vw','10vw','6xl']} color = 'brand.700' right = {0}>J</Box>
                    </Link>
                    <Link to="/">
                        <Box  fontSize={['10vw','8vw','5xl']} bgClip= 'text' bgGradient='linear(to-l, #63B3ED, #2C5282)' left = '0px'>Workouts</Box>
                    </Link>
                    <span id = 'headerWeight' class="material-icons">fitness_center </span>                    
                </Flex>

                
                <Spacer/>
                

                <Container marginRight="2.5%">
                
                    <Menu>
                        <MenuButton float='right'>
                            <HamburgerIcon h = 'auto' w = {['12vw','10vw','4vw']} color="brand.600"/>
                        </MenuButton>
                        <MenuList>
                            <Link to="/login">
                                <MenuItem>Login</MenuItem>
                            </Link>

                            <MenuDivider />
                            
                            <Link to="/workoutpage">
                                <MenuItem>Workouts</MenuItem>
                            </Link>
                            <MenuDivider />
                            <Link to="/programspage">
                                <MenuItem>Programs</MenuItem>
                            </Link>
                            <Link to="/exercisepage">
                                <MenuItem>Exercises</MenuItem>
                            </Link>
                            <Link to="/onermcalc">
                                <MenuItem>1RM Calculator</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                    
                    
                </Container>
            

            </Flex>
            <Signout name = {localStorage.getItem('fitness')} dis = {{display: sDisplay}}/>
            
        </div>
    );
}

export default Header;