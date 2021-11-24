import {Button, Container, Typography, AppBar,Box, Toolbar, IconButton} from '@mui/material';
import React from 'react';


const Navbar = () => {
    return(


        <Container sx={{marginTop:'10px'}}>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ borderRadius:'4px', backgroundColor:'#ffedc5' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2}}
            >
              
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"#3b3b3b" }}>
              Test Depresion
            </Typography>
            <Button  variant='outlined' sx={{color:"#3b3b3b", borderColor:"#3b3b3b" }}>Ayuda</Button>
          </Toolbar>
        </AppBar>
        </Box>
        </Container>
    );
}
export default Navbar;
