// BookingForm.js

import "../styles/styles.css"
import "../styles/BookingForm.css"
import { useState, useReducer } from 'react';
import { Box, HStack, VStack } from "@chakra-ui/react";

const convertToAmericanTime = (time) => {
	const [hour, minutes] = time.split(':');
	const parseHour = parseInt(hour, 10);
	let displayHour = parseHour % 12 || 12;
	const period = parseHour >= 12 ? 'PM' : 'AM';
	return `${displayHour}:${minutes} ${period}`;
};

const BookingForm = ({ dispatch, availableTimes, updateTimes, submitForm }) => {
	const [selectedDate, setSelectedDate] = useState('');
	const [selectedTime, setSelectedTime] = useState('');
	const [numberOfGuests, setNumberOfGuests] = useState('2 People');
	const [selectedOccasion, setSelectedOccasion] = useState('-');
	const [errorMessage, setErrorMessage] = useState('');

	const handleDateChange = (event) => {
		const selectedDate = event.target.value;
		const updatedTimes = updateTimes(selectedDate);
		dispatch({ type: 'SET_AVAILABLE_TIMES', payload: updatedTimes });
		setSelectedDate(selectedDate);
	};

	const handleTimeChange = (event) => {
		setSelectedTime(event.target.value);
	};

	const handleGuestsChange = (event) => {
		setNumberOfGuests(event.target.value);
	};

	const handleOccasionChange = (event) => {
		setSelectedOccasion(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = {
			selectedDate,
			selectedTime,
			numberOfGuests,
			selectedOccasion
		};
		const success = submitForm(formData);
		if (success) {
			console.log('The form was submitted successfully');
		} else {
			console.log('An error occurred while submitting the form.');
			setErrorMessage('An error occurred while submitting the form.');
		}
	};

	const formattedTimes = availableTimes.map((time) => {
		const formattedTime = convertToAmericanTime(time);
		return (
			<option key={time} value={time}>
				{formattedTime}
			</option>
		)
	})

	return (
		<form className="booking-form" onSubmit={handleSubmit}>
			<Box className="booking-fields">
				<Box className="booking-field">
					<label htmlFor="book-guests">Number of guests</label>
					<select
						id='book-guests'
						value={numberOfGuests}
						onChange={handleGuestsChange}
						required
					>
						<option>1 Person</option>
						<option>2 People</option>
						<option>3 People</option>
						<option>4 People</option>
						<option>5 People</option>
						<option>6 People</option>
						<option>7 People</option>
						<option>8 People</option>
						<option>9 People</option>
						<option>10 People</option>
						<option>11 People</option>
						<option>12 People</option>
					</select>
				</Box>
				<Box className="booking-field">
					<label htmlFor="book-date">Choose date</label>
					<input
						type="date"
						id="book-date"
						value={selectedDate}
						onChange={handleDateChange}
						required
						min={new Date().toISOString().split('T')[0]}
					/>
				</Box>
				<Box className="booking-field">
					<label htmlFor="book-time">Choose time</label>
					<select
						id="book-time"
						value={selectedTime}
						onChange={handleTimeChange}
						required
					>
						{formattedTimes}
					</select>
				</Box>
				<Box className="booking-field">
					<label htmlFor="book-occasion">Occasion (optional)</label>
					<select
						id="book-occasion"
						value={selectedOccasion}
						onChange={handleOccasionChange}
					>
						<option>-</option>
						<option>Birthday</option>
						<option>Anniversary</option>
						<option>Date</option>
						<option>Special Occasion</option>
						<option>Business Meal</option>
					</select>
				</Box>
			</Box>
			<button type="submit" className="callToAction-btn" aria-label="Find a Table">
				Find a Table
			</button>
			{errorMessage && <p className="error-message">{errorMessage}</p>}
		</form>
	)
}

export default BookingForm;