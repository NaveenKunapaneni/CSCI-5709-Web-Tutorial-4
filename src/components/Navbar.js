import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Navbar(props) {

  const navigate = useNavigate();

  const handleRegisterButton = () => {
    navigate('/');  
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block', fontWeight: 'bold' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {props.isLoggedIn ? (
            <Button  color="inherit" sx = {{ fontWeight: 'bold', flex: 'right'}} onClick={handleRegisterButton} >Logout</Button>
          ) : (
            <Button  color="inherit" sx = {{ fontWeight: 'bold', flex: 'right' }} onClick={handleRegisterButton} >Login</Button>
          ) }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;