import React, { useState } from 'react';
import './App.css';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Box from '@mui/material/Box';
import Profilepage from './components/Profilepage.js';
import CardItemDetails from './components/CardItemDetails.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <Box>
      {/* <Navbar isLoggedIn={isLoggedIn}/>
        {isLoggedIn ? <Profilepage firstname={firstname}
                                    lastname={lastname}
                                    email={email} 
                                    /> : 
          (
          <Register setFirstname={setFirstname} 
                  setLastname={setLastname} 
                  setEmail={setEmail} 
                  setPassword={setPassword} 
                  setLoggedIn={setLoggedIn}
        />
        )} */}
      <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" exact element={<Register setLoggedIn={setLoggedIn} />} />
          <Route path="/users" element={<Profilepage isLoggedIn={isLoggedIn} />} />
          <Route path="/users/id" exact element={<CardItemDetails />}/>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
