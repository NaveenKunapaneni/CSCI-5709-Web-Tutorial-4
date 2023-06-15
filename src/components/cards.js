import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function MultiActionAreaCard(props) {
  
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate("/users/id",  {state:{_id:props._id}})
    // console.log(props._id)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.profilepic}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'}>
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={'bold'}>
            {props.age}, {props.gender}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={'bold'}>
            {props.phone}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={'bold'}>
            {props.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{float: 'right'}} >
        <Button size="small" color="primary" variant='contained' onClick={()=>{handleDetails()}}>
          More Details
        </Button>
      </CardActions>
    </Card>
  );
}