import {Button, Container, Typography, AppBar,Box, Toolbar, IconButton, Modal} from '@mui/material';
import React from 'react';
import Helpscr from './Helpscr';


const Navbar = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            ¿Tienes depresion?
            </Typography>
            <Button  onClick={handleOpen} variant='outlined' sx={{color:"#3b3b3b", borderColor:"#3b3b3b" }}>Ayuda</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Helpscr />
            </Modal>
          </Toolbar>
        </AppBar>
        </Box>
        </Container>
    );
}
export default Navbar;
