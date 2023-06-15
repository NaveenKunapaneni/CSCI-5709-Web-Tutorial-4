import React from "react";
import { Grid, TextField, Box } from '@mui/material';
import MultiActionAreaCard from "./cards";
import './Profilepage.css';
import axios from "axios";
import { useEffect, useState } from "react";

export default function Profilepage(props) {

    const [profiles, setProfiles] = useState([]);
    const [searchUserDetails, setSearchUserDetails] = useState([]);
    const fetchData = axios.get('https://express-t4.onrender.com/api/users');

    function handleSearch (event) {
        var searchUserDetails = [...profiles]
        setSearchUserDetails(searchUserDetails.filter((det) => {
            if (event.target.value === "") {
                return true
            }
            else {
                return det.name.toLowerCase().includes(event.target.value.toLowerCase());
            }
        }));
    }

    useEffect(() => {
        fetchData.then(
            function (response) {
                setProfiles(response.data);
                setSearchUserDetails(response.data);
            }
        ).catch(function (error) {
            console.log('error');
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Box sx={{ height: '50px' }} />
            <TextField id="outlined-basic" label="Search"  helperText="Search by full name or last name" variant="outlined" onChange={handleSearch}/>
    
            <Box sx={{ height: '50px' }} />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    {searchUserDetails.map(profile => (
                        <Grid item xs={4}>
                            <div className="card-profile">
                                <MultiActionAreaCard key={profile._id}
                                                    profilepic={profile.picture} 
                                                    name={profile.name} 
                                                    _id={profile._id} 
                                                    email={profile.email} 
                                                    age={profile.age}
                                                    phone={profile.phone}
                                                    gender={profile.gender}
                                                    index={profile.index} 
                                                />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}