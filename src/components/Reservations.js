// Reservations.js

import "../styles/styles.css"
import "../styles/Reservations.css"
import { Routes, Route, Link } from 'react-router-dom';
import { Box, HStack, VStack } from "@chakra-ui/react";

const Reservations = () => {
    return (
        <Box className="reservations-container">
            <Box className="reservations">
                <h2>Make a Reservation</h2>
                <Link to="/reservations">
                    <button className="callToAction-btn" aria-label="Find a Table">
                        Find a Table
                    </button>
                </Link>
            </Box>
        </Box>
    )
}

export default Reservations;
