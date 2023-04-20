import React, { useContext, useEffect, useState } from 'react';
import { webContent } from '../../App';

const Booking = () => {
    const [user] = useContext(webContent);

    const [bookings, setBooings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/read?email=' + user.email, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setBooings(data)
            })
    }, [])

    return (
        <div>
            <h3>You have {bookings.length} bookings</h3>
            {
                bookings.map(booking => <p key={booking._id}>from: {new Date(booking.checkIn).toDateString('DD/MM/YYYY')} - to: {new Date(booking.checkOut).toDateString("DD/MM/YYYY")} , ({booking.userEmail})</p>)
            }
        </div>
    );
};

export default Booking;