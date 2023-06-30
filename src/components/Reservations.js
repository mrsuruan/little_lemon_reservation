// Reservations.js

import "../styles/styles.css";
import "../styles/Reservations.css";
import BookingForm from './BookingForm';
import { Routes, Route, Link } from 'react-router-dom';
import { Box, HStack, VStack } from "@chakra-ui/react";
import { useState, useReducer, useEffect } from 'react';

const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_AVAILABLE_TIMES':
            return action.payload;
        default:
            return state;
    }
};

const initializeTimes = () => {
	const today = new Date();
	const availableTimes = window.fetchAPI(today);
	console.log(availableTimes);
	return availableTimes;
}

const updateTimes = async (selectedDate) => {
	// const availableTimes = await fetchAPI(selectedDate);
	// return availableTimes;
}

const Reservations = () => {

	useEffect(() => {

	}, [])

	const [availableTimes, dispatch] = useReducer(availableTimesReducer, initializeTimes());

	return (
		<Box className="reservations-container">
			<Box className="reservations">
				<h2>Make a Reservation</h2>
				<BookingForm
					dispatch={dispatch}
					availableTimes={availableTimes}
					updateTimes={updateTimes}
				/>
			</Box>
		</Box>
	)
}

export default Reservations;
