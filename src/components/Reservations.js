// Reservations.js

import "../styles/styles.css";
import "../styles/Reservations.css";
import BookingForm from './BookingForm';
import { Routes, Route, Link } from 'react-router-dom';
import { Box, HStack, VStack } from "@chakra-ui/react";
import { useState, useReducer } from 'react';

const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_AVAILABLE_TIMES':
            return action.payload;
        default:
            return state;
    }
};

const Reservations = () => {

    const [availableTimes, dispatch] = useReducer(availableTimesReducer, [
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
    ]);

    return (
        <Box className="reservations-container">
            <Box className="reservations">
                <h2>Make a Reservation</h2>
                <BookingForm dispatch={dispatch} availableTimes={availableTimes} />
            </Box>
        </Box>
    )
}

export default Reservations;
