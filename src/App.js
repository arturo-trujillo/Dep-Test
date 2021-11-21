import logo from './logo.svg';
import './App.css';
import {Button, Container, Typography, AppBar, Stack,Box, Toolbar,Paper, IconButton, LinearProgress} from '@mui/material';
import React,{useState} from 'react';
import { questions } from './questions';
import { ClassNames } from '@emotion/react';



function App() {

  
 
  const [progress, setProgress] = React.useState(0);
  const [currentQuestion, setCurrenQuestion] = useState(0);
  
  const handleAnswerOptionClick = (goto, questionText) =>{
    const nextQuestion = goto;
    if(goto == 0){
      setProgress(0);
    }
    else{
      
      setProgress(progress+16.67);
    }
    console.log(goto);
    setCurrenQuestion(nextQuestion);
  };

  return (
    
    <Container className='question-section' align='center'>
      
      <Container>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Test Depresion
          </Typography>
          <Button color="inherit">Ayuda</Button>
        </Toolbar>
      </AppBar>
    </Box>
      </Container>

    <br></br> <br></br> <br></br> <br></br> <br></br>
    <LinearProgress variant="determinate" value={progress} />
      <br></br>
      <Container align='center' >
        <Typography className='question-text'>
          {questions[currentQuestion].questionText}
        </Typography>
        <br></br> <br></br>
      <Stack className='answer-section' direction='row' spacing ={2} alignItems='center' justifyContent={'center'}> 
          {questions[currentQuestion].answerOptions.map((answerOption)=> (
            <Button  variant='outlined'  onClick={() => handleAnswerOptionClick(answerOption.goto)}>{answerOption.answerText}</Button>
          ))}
      </Stack>

      </Container>

    </Container>
      
   
  );
}

export default App;
