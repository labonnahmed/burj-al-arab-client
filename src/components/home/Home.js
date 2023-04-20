import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import { deepPurple, red } from '@mui/material/colors';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import './Home.css';
import fakedata from '../../fakedata/fakedata.json';
import HotelIcon from '@mui/icons-material/Hotel';
import WcIcon from '@mui/icons-material/Wc';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Link } from 'react-router-dom';

const Home = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => setRooms(fakedata), []);

  return (
    <Container>
      <Grid container spacing={4} className="room-card">
        {
          rooms.map(room =>
            <Grid item xs={12} lg={4} md={6} key={room.id}>
              <Card sx={{ maxWidth: 400, p: 2 }} >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="room">
                      {room.letter}
                    </Avatar>
                  }
                  title={room.name}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={room.image}
                  alt={room.title}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary"> {room.description} </Typography>
                </CardContent>
                <div className='booking-card-action'>
                  <h5><HotelIcon sx={{ color: "#393939" }}></HotelIcon>: {room.bed}</h5>
                  <h5><WcIcon sx={{ color: "#393939" }}></WcIcon>: {room.geust}</h5>
                  <h5><AttachMoneyIcon sx={{ color: "#393939" }}></AttachMoneyIcon>: {room.price}</h5>
                  <Link to='/book' style={{textDecoration:'none'}}>
                    <Button variant="contained" sx={{ bgcolor: deepPurple[700] }}>BOOK</Button>
                  </Link>
                </div>
              </Card>
            </Grid>
          )
        }
      </Grid>
    </Container>
  );
};

export default Home;