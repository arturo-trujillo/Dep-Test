import logo from './logo.svg';
import './App.css';
import {Button, Container, Typography, AppBar} from '@mui/material';
import React,{useState} from 'react';
import { questions } from './questions';

function App() {
  
  const [currentQuestion, setCurrenQuestion] = useState(0);
  
  const handleAnswerOptionClick = (goto) =>{
    const nextQuestion = goto;
    setCurrenQuestion(nextQuestion);
  };

  return (
    
    <Container className='question-section' align='center'>
      <Container>
      <AppBar className='app-bar'> 
          <Typography variant='h5'>
            Test de depresion. 
          </Typography> 
        </AppBar>
      </Container>
      <br/><br/><br/><br/><br/><br/><br/>
        <Typography className='question-text'>
          {questions[currentQuestion].questionText}
        </Typography>
        <br></br>
      <Container className='answer-section'> 
          {questions[currentQuestion].answerOptions.map((answerOption)=> (
            <Button  variant='contained' onClick={() => handleAnswerOptionClick(answerOption.goto)}>{answerOption.answerText}</Button>
          ))}
      </Container>
    </Container>
      
   
  );
}

export default App;
