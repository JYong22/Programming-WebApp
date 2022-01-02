import Header from "./header";
import { useState } from "react";
import axios from "axios";
import {Button, ButtonGroup, Container, Select,Input,Box, Flex, Tabs,Tab, TabList, TabPanels, TabPanel} from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'


function LoginPage(){
    const [usernameSignin, setUsernameSignin] = useState('');
    const [passwordSignin, setPasswordSignin] = useState('');

    const [usernameSignup, setUsernameSignup] = useState('');
    const [passwordSignup, setPasswordSignup] = useState('');
    const [cPasswordSignup, setcPasswordSignup] = useState('');
    
    
    const login = () =>{
        const data = {
            username: usernameSignin,
            password: passwordSignin
        };      

        fetch('http://localhost:8080/api/v1/signin', {
            method: 'POST', // or 'PUT'
            credentials: 'include', 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
        },

            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                if (data.username != null){
                    alert ('Logged In');
                    localStorage.clear();
                    localStorage.setItem('fitness', data.username);
                    window.location.reload();
                }
                else
                    alert('Unsuccessful');
        })
            .catch((error) => {
            console.error('Error:', error);
        });
    }

    const signup = () =>{

        const data = {
            username: usernameSignup,
            password: passwordSignup
        };      
        console.log(data);
        fetch('http://localhost:8080/api/v1/signup', {
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

    return(
        <div>
            <Header />

            <Tabs defaultIndex={0}>
            <Flex bg = 'white' direction='column'>
                <Box w = '100%' h = '7vh' bgGradient='radial(#F7FAFC, #E2E8F0)' >
                    <TabList color = '#2D3748' fontWeight='fontWeights.bold'>
                        <Flex id = 'loginTabs' h = '7vh' w = '100%' direction='row' marginLeft={2}>
                            <Tab    fontSize='2xl' _selected={{ color: 'black', bg: 'brand.300' }}>Login</Tab>
                            <Tab    fontSize='2xl' _selected={{ color: 'black', bg: 'brand.300' }}>Sign Up</Tab>
                        </Flex>
                    </TabList>
                </Box>
                <TabPanels>
                    <TabPanel>
                        <Container maxW='xl' centerContent marginTop={10} flexGrow="2">
                            <Box bg='brand.50' w='100%' p={10} color='#2D3748' borderRadius='lg' border='2px solid #718096'>
                                <form method = "post" onSubmit={(e) =>{
                                    e.preventDefault();
                                    login();

                                }}>
                                    <FormControl>
                                    <FormHelperText fontSize="2xl">Login</FormHelperText>

                                        <FormLabel htmlFor='userName' marginTop={3}>User Name</FormLabel>
                                        <Input id='signInUserName' type='userName' required onChange={(e) =>{
                                            setUsernameSignin(e.target.value);
                                        }}/>

                                        <FormLabel htmlFor='password' marginTop={5}>Password</FormLabel>
                                        <Input id='signInPassword' type='password' required onChange={(e) =>{
                                            setPasswordSignin(e.target.value);
                                        }}/>

                                        <Button type = 'submit' colorScheme='#2D3748' variant='outline' marginTop={5}>Login</Button>
                                    </FormControl>
                                </form>
                            </Box>
                        </Container>
                    </TabPanel>
                    <TabPanel>
                        <Container maxW='xl' centerContent marginTop={10} flexGrow="2">
                            <Box bg='brand.50' w='100%' p={10} color='black' borderRadius='lg' border='2px solid #718096' >
                                <form method = "post" onSubmit={(e) =>{
                                    if (cPasswordSignup == passwordSignup){
                                        e.preventDefault();
                                        signup();
                                    }
                                    else {
                                        alert("The confirmed password is not the same as the password entered.")
                                        e.preventDefault();
                                    }

                                }}>
                                    <FormControl>
                                        <FormHelperText fontSize="2xl">Sign Up</FormHelperText>

                                        <FormLabel htmlFor='userName' marginTop={3}>User Name</FormLabel>
                                        <Input id='signUpUserName' type='userName' required onChange={(e) =>{
                                            setUsernameSignup(e.target.value);
                                        }}/>

                                        <FormLabel htmlFor='password' marginTop={5}>Password</FormLabel>
                                        <Input id='signUpPassword' type='password' required onChange={(e) =>{
                                            setPasswordSignup(e.target.value);
                                        }}/>
                                        <FormLabel htmlFor='cPassword' marginTop={5}>Confirm Password</FormLabel>
                                        <Input id='signUpCPassword' type='password' required onChange={(e) =>{
                                            setcPasswordSignup(e.target.value);
                                        }}/>

                                        <Button type = 'submit' colorScheme='black' variant='outline' marginTop={5}>Sign Up</Button>
                                    </FormControl>
                                </form>
                            </Box>
                        </Container>
                    </TabPanel>
                </TabPanels>
                
            </Flex>
        </Tabs>
            

        </div>
    );
}

export default LoginPage;