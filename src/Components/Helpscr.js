import { Button, Container, Typography, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Helpscr = () => {

 

    return(
        <Container align='center'>
            <Box sx={{backgroundColor:'#FFFFFF', marginTop:'350px', marginLeft:'150px', marginRight:'150px', borderRadius:'15px', boxShadow:3}}>

            <Typography id='modal-modal-title' sx={{ paddingTop:'10px'}}>

            ¿Necesitas ayuda con algo?

            </Typography>
            <Typography id='modal-modal-description' sx={{margin:'10px'}}>
                Puedes consultar las siguientes paginas para pedir ayuda.

            </Typography>
            <Stack direction='row' sx={{marginLeft:'50px'}}>

            <Button variant='contained' target="_blank" href="https://www.cdc.gov/tobacco/campaign/tips/spanish/enfermedades/tabaquismo-afecciones-mentales-depresion-ansiedad.html" sx={{margin:'10px'}}>CDC</Button>
            <Button variant='contained' target="_blank" href="https://www.gob.mx/salud/es/articulos/linea-de-la-vida-ayuda-profesional-para-personas-con-depresion?idiom=es" sx={{margin:'10px'}}>GOV</Button>
            <Button variant='contained' target="_blank" href="https://www.gob.mx/salud%7Cconadic/" sx={{margin:'10px'}}>CAPA</Button>
            </Stack>
            
           

            <Typography sx={{margin:'10px', paddingBottom:'5px'}}>
                Linea de la Vida : 800 911 2000
            </Typography>

            </Box>


        </Container>
        
    );
}

export default Helpscr;