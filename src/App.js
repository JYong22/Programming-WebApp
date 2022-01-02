import './App.css';
import HomePage from './pages/homepage';
import {Routes,
  Route} from 'react-router-dom';
import LoginPage from './pages/loginpage';
import OneRmCalculator from './pages/oneRmCalc';
import WorkoutPage from './pages/WorkoutPageContent/workout';
import ExercisePage from './pages/exercise';
import ProgramsPage from './pages/programs';
import * as React from 'react'
import { ColorModeScript } from '@chakra-ui/react'



function App(){
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="workoutpage" element={<WorkoutPage/>} />
        <Route path="programspage" element={<ProgramsPage/>} />
        <Route path="exercisepage" element={<ExercisePage/>} />
        <Route path="onermcalc" element={<OneRmCalculator/>} />
      </Routes>
      
    </div>
  );
}

export default App;
