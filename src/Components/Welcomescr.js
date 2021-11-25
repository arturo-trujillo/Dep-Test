import { Button, Typography,Box, Container } from "@mui/material";
import { border, borderRadius } from "@mui/system";
import React from "react";

const Welcomescr= (props)=> {
    return(
            <Container align='center'>
            <Box  sx={{ margin: '200Px', backgroundColor:'#b9cfd7', borderRadius:'10px', boxShadow:2}}>
                <Typography  sx={{margin:'40px', fontFamily:'verdana', fontSize:'18px', paddingTop:'20px', color:'#0d0d0d'}}>
                    Bienvenido a la pagina para realizar un test y determinar si cuentas con algun tipo de depresion. Recuerda, todo estara bien.
                </Typography>  
            <Button variant='contained' value={1} onClick={props.clickBtn} sx={{ margin:'20px', backgroundColor:'#ffd864', borderRadius:'25px', color:'#606060'}}>
                Iniciar Test
            </Button>

            </Box>

            </Container>
    );
}

export default Welcomescr;