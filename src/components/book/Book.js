import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React, { useContext, useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Box, Button } from '@mui/material';
import { webContent } from '../../App';
import Booking from '../booking/Booking';

const Book = () => {
    const [user] = useContext(webContent);

    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date()
    });

    const handleCheckInDate = (date) => {
        const newDates = { ...selectedDate };
        newDates.checkIn = date;
        setSelectedDate(newDates);
    };

    const handleCheckOutDate = (date) => {
        const newDates = { ...selectedDate };
        newDates.checkOut = date;
        setSelectedDate(newDates);
    };

    const handleBooking = () => {
        // console.log(selectedDate, user.displayName, user.email);

        const userName = user.displayName;
        const userEmail = user.email;
        const newBooking= {userName, userEmail, ...selectedDate }

        console.log(newBooking)

        fetch('http://localhost:8000/insert', {
            method: 'POST',
            body: JSON.stringify(newBooking),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }

    return (
        <Box align={'center'} sx={{ m: 2 }}>
            <h3>Welcome! {user.displayName}</h3>
            <br />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    sx={{ mx: 1 }}
                    label="Check-in Date"
                    value={selectedDate.checkIn}
                    onChange={handleCheckInDate}
                    slotProps={{
                        textField: {
                            helperText: 'MM / DD / YYYY',
                        },
                    }}
                />

                <DatePicker
                    label="Check-out Date"
                    value={selectedDate.checkOut}
                    onChange={handleCheckOutDate}
                    slotProps={{
                        textField: {
                            helperText: 'MM / DD / YYYY',
                        },
                    }}
                />
            </LocalizationProvider>
            <br />
            <br />
            <Button variant="contained" size="large" onClick={handleBooking}>Book Now</Button>
            <Booking />
        </Box>
    );
};

export default Book;