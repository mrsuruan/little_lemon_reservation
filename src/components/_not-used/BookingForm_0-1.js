// BookingForm.js

import "../styles/styles.css"
import "../styles/BookingForm.css"
import { useState } from 'react';
import { Box, HStack, VStack } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ availableTimes }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('7:00 PM');
    const [numberOfGuests, setNumberOfGuests] = useState('2 People');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleGuestsChange = (event) => {
        setNumberOfGuests(event.target.value);
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        navigate('/');
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <Box className="booking-fields">
                <Box className="booking-field">
                    <label htmlFor="book-guests">Number of guests</label>
                    <select
                        id='book-guests'
                        value={numberOfGuests}
                        onChange={handleGuestsChange}
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
                    />
                </Box>
                <Box className="booking-field">
                    <label htmlFor="book-time">Choose time</label>
                    <select
                        id="book-time"
                        value={selectedTime}
                        onChange={handleTimeChange}
                    >
                        {availableTimes.map((time) => (
                            <option key={time}>{time}</option>
                        ))}
                    </select>
                </Box>
            </Box>
            <button type="submit" className="callToAction-btn" aria-label="Find a Table">
                Find a Table
            </button>
        </form>
    )
}

export default BookingForm;





                {/* <input type="submit" defaultValue="Make Your reservation" /> */}

                {/* <input type="number" placeholder={2} min={1} max={10} id="book-guests" /> */}

                {/* <label htmlFor="occasion">Occasion</label>
                <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select> */}