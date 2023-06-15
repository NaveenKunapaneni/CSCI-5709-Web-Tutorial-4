import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './CardItemDetails.css';
import axios from 'axios';


const CardItemDetails = () => {


    const location = useLocation();
    console.log(location);
    const _id = location.state._id;
    const [user, setUser] = useState([]);
    const fetchData = axios.get('https://express-t4.onrender.com/api/users/'+_id);


    const navigate = useNavigate();
    const handleBackButton = () => {
        navigate('/users');
    }
    
    useEffect(() => {
        fetchData.then(
            function (response) {
                console.log(location)
                setUser(response.data);
                console.log(user);
            }
        ).catch(function (error) {
            console.log('error');
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='card-item-details' style={{flex: 'mi'}}>

            <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                    <Button size="small" color="primary" variant='contained' onClick={handleBackButton}>
                        Back
                    </Button>
                    <Box sx={{ height: '50px' }} />
                    <CardMedia
                        component="img"
                        height="140"
                        image={user.picture}
                        alt={user.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'}>
                            {user.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontWeight={'bold'}>
                            {user.age}, {user.gender}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontWeight={'bold'}>
                            {user.phone}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontWeight={'bold'}>
                            {user.email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontWeight={'bold'}>
                          Company: {user.company}  
                        </Typography>

                        <Typography variant="body2" color="text.secondary" fontWeight={'bold'}>
                            About: {user.about}
                        </Typography>
                        <hr/>
                        <Typography variant="body2" color="text.secondary" fontWeight={'bold'}>
                            Registered: {user.registered}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ float: 'right' }} >

                </CardActions>
            </Card>
        </div>
    );
}

export default CardItemDetails;