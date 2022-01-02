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


function OneRmCalculator(){
    const [weight, setWeight] = useState(0);
    const [reps, setReps] = useState(0);
    const [rm, setRm] = useState([]);

    const calculate = () =>{
        axios.get(`http://localhost:8080/api/v1/calculaterm`, {
            params: {
                weight: weight,
                reps: reps
            }
        }).then((res)=>{
            setRm(res.data);
        });

    }
    return(
        <div>
            <Header/>
            <Container centerContent maxW='container.lg'>
                <Flex direction='column' >
                    <Text fontWeight= 'bold' fontSize={{ base: '2xl', md: '4xl', lg: '6xl' }}>
                        Calculate Your One Rep Max
                    </Text>
                    <Flex direction='column'>

                        <Container maxW='xl' centerContent marginTop={10} flexGrow="2">
                                <Box bg='brand.50' w='100%' p={10} color='#2D3748' borderRadius='lg' border='2px solid #718096'>
                                <form onSubmit={(e) =>{
                                        e.preventDefault();
                                        calculate();
                                    }}>
                                    <FormControl>
                                    <FormHelperText fontSize="2xl">Calculate</FormHelperText>

                                        <FormLabel htmlFor='weight' marginTop={3} >
                                            Weight (Lb)
                                        </FormLabel>
                                        <Input id='weight' type='number' required onChange = {(e) => {
                                                                                    setWeight(e.target.value)}}/>

                                        <FormLabel htmlFor='reps' marginTop={5}>Reps</FormLabel>
                                        <Input id='reps' type='number' required onChange = {(e) => {
                                                                                    setReps(e.target.value)}}/>

                                        <Button type = 'submit' colorScheme='#2D3748' variant='outline' marginTop={5}>Calculate</Button>
                                    </FormControl>
                                </form>
                                </Box>
                        </Container>
                        <Box marginTop={10}>
                            <Grid templateColumns='repeat(2, 1fr)' gap = {3}>
                                            {rm.map((v)=>{
                                                return(
                                                    <Box border = '2px solid black'>
                                                        <Text margin={3}>{v.calc}: {v.calculation} lb</Text>
                                                    </Box>
                                                );
                                            })}

                            </Grid>
                            
                        </Box>
                     </Flex>

                    
                </Flex>
            </Container>
        </div>
    );
}
export default OneRmCalculator;