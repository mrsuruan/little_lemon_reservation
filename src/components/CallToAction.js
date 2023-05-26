import "../styles/styles.css"
import "../styles/CallToAction.css"
import mario_adrian_1 from "../images/mario_adrian_1.jpg";
import { Routes, Route, Link } from 'react-router-dom';
import { Box, HStack, VStack } from "@chakra-ui/react";


function CallToAction() {
    return (
        <Box className="callToAction-container">
            <HStack className="callToAction">
                <Box>
                    <Box className="callToAction-text">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <h4>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h4>
                    </Box>
                    <Link to="/reservations">
                        <button className="reserve-btn" aria-label="Reserve a Table">
                            Reserve a Table
                        </button>
                    </Link>
                </Box>
                <img src={mario_adrian_1} style={{width: "600px"}} title="Brothers Mario and Adrian" alt="brothers Mario and Adrian"/>
            </HStack>
        </Box>
    )
}

export default CallToAction;