// Reservations.js

import "../styles/styles.css";
import "../styles/Reservations.css";
import BookingForm from './BookingForm';
import { Routes, Route, Link } from 'react-router-dom';
import { Box, HStack, VStack } from "@chakra-ui/react";
import { useState, useReducer } from 'react';

const Reservations = () => {

    const initializeTimes = () => [
        '5:00 PM',
        '5:30 PM',
        '6:00 PM',
        '6:30 PM',
        '7:00 PM',
        '7:30 PM',
        '8:00 PM',
        '8:30 PM',
        '9:00 PM',
        '9:30 PM',
        '10:00 PM'
    ];

    const updateTimes = (state, selectedDate) => {
        return state;
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

    const handleDateChange = (selectedDate) => {
        dispatch(selectedDate);
    };

    return (
        <Box className="reservations-container">
            <Box className="reservations">
                <h2>Make a Reservation</h2>
                < BookingForm
                    availableTimes={availableTimes}
                    onDateChange={handleDateChange}
                />
            </Box>
        </Box>
    )
}

export default Reservations;




    // const [availableTimes] = useState([
    //     '5:00 PM',
    //     '5:30 PM',
    //     '6:00 PM',
    //     '6:30 PM',
    //     '7:00 PM',
    //     '7:30 PM',
    //     '8:00 PM',
    //     '8:30 PM',
    //     '9:00 PM',
    //     '9:30 PM',
    //     '10:00 PM'
    // ])