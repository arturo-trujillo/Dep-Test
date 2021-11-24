import {Button, Container, Typography, Stack,Box,LinearProgress,Paper} from '@mui/material';
import React,{useState} from 'react';
import { questions } from '../questions';








const Qform = ()=> {

    const [progress, setProgress] = useState(0);
    const [currentQuestion, setCurrenQuestion] = useState(0);
    
    const handleAnswerOptionClick = (goto) =>{
      const nextQuestion = goto;
      if(goto === 0){
        setProgress(0);
      }
      else{
        
        setProgress(progress+16.67);
      }
      console.log(goto);
      setCurrenQuestion(nextQuestion);
    };




    return (
        <Container className='question-section' align='center' sx={{paddingTop:'200px'}}>
      
     
      
      <Paper variant='outlined' sx={{color:'#3b3b3b', backgroundColor:'#ffedc5', marginLeft:'50px', marginRight:'50px', borderRadius:'20px'}}>
  
        
      <LinearProgress variant="determinate" value={progress} sx={{backgroundColor:'#cf7b44', marginTop:'25px', marginLeft:'20px', marginRight:'20px', borderRadius:'20px' }} />
        <Container align='center' >
          <Box sx={{backgroundColor:'#8aa889', borderRadius:'20px', color:'#FFFFFF'}}>
          <Typography className='question-text' sx={{margin:'40px', fontFamily:'verdana', fontSize:'18px' }}>
            {questions[currentQuestion].questionText}
          </Typography>
          </Box>
        <Stack className='answer-section' direction='row' spacing ={2} alignItems='center' justifyContent={'center'} sx={{margin:'60px'}}> 
            {questions[currentQuestion].answerOptions.map((answerOption)=> (
              <Button  variant='contained' sx={{color:"#FFFFFF", backgroundColor:"#d69d78", borderRadius:'50px'}} onClick={() => handleAnswerOptionClick(answerOption.goto)}>{answerOption.answerText}</Button>
            ))}
        </Stack>
  
        </Container>
      </Paper>
  
      </Container>
        
    );
}

export default Qform;