import React, { useState } from 'react';
import { Grid, Paper, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TravelImage from '../plane.jpg';
import './Register.css';
import axios from 'axios';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';

const Register = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emptyFiledsErrormsg, setEmptyFieldsErrorMsg] = useState("");
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        console.log({username: username, password: password})

        if (username === '' || password === '') {
            setEmptyFieldsErrorMsg("Please enter Username and password"); 
          return;
        }
        
        const credentials = {
            username: username,
            password: password
        };
        
        axios.post('https://express-t4.onrender.com/api/login', credentials)
          .then((response) => {
            console.log(response.data);
            props.setLoggedIn(true);
            navigate("/users");
          })
          .catch((error) => {
            console.log(error);
            setEmptyFieldsErrorMsg("Invalid Credentials!")
          });
      }

    return (
        <Grid container spacing={0.0}>
            <Grid item xs={6}>
                <Paper style={{ height: '100vh' }}>
                    <img className='image'
                        src={TravelImage}
                        alt='Travel' />
                </Paper>
            </Grid>
            <Grid item xs={6} className='form-container'>
                <Paper elevation={1} className='form'>
                    <form noValidate>
                    <h2 style={{textAlign: 'center'}}>Login</h2>
                    <TextField
                            label="Username"
                            variant="outlined"
                            placeholder='Username'
                            fullWidth
                            margin="normal"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    <TextField
                            label="Password"
                            variant="outlined"
                            placeholder='Password'
                            fullWidth
                            margin="normal"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            {emptyFiledsErrormsg.length > 0 ? (
                                <Alert severity="error">{emptyFiledsErrormsg}</Alert>
                            ) : null }
                        <Button type='submit' variant="contained" endIcon={<SendIcon />} onClick={submit} >
                            Login 
                            </Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Register;
