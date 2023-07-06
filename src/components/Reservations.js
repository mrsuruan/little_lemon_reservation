// Reservations.js

import "../styles/styles.css";
import "../styles/Reservations.css";
import BookingForm from './BookingForm';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';
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

export const initializeTimes = async (selectedDate) => {
	const availableTimes = await window.fetchAPI(selectedDate);
	console.log(availableTimes);
	return availableTimes;
};

export const updateTimes = (selectedDate) => {
	const availableTimes = window.fetchAPI(new Date(selectedDate));
	return availableTimes;
};

const Reservations = () => {
	const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

	useEffect(() => {
		const fetchAvailableTimes = async () => {
			const today = new Date();
			const times = await initializeTimes(today);
			dispatch({ type: `SET_AVAILABLE_TIMES`, payload: times });
		};
		fetchAvailableTimes();
	}, []);

	const navigate = useNavigate();

	const submitForm = (formData) => {
		const success = window.submitAPI(formData);
		if (success) {
			navigate('/booking-confirmation');
		}
	};

	return (
		<Box className="reservations-container">
			<Box className="reservations">
				<h2>Make a Reservation</h2>
				<BookingForm
					dispatch={dispatch}
					availableTimes={availableTimes}
					updateTimes={updateTimes}
					submitForm={submitForm}
				/>
			</Box>
		</Box>
	)
}

export default Reservations;