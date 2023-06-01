import "../styles/styles.css"
import "../styles/CallToAction.css"
import mario_adrian_1 from "../images/mario_adrian_1.jpg";
import { Routes, Route, Link } from 'react-router-dom';
import { Box, HStack, VStack } from "@chakra-ui/react";


function CallToAction() {
    return (
        <Box className="callToAction-container">
            <Box className="callToAction">
                <Box>
                    <Box className="callToAction-text">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <h5>We are a family owned Mediterranean restaurant that focuses on traditional recipes served with a modern twist.</h5>
                    </Box>
                    <Link to="/reservations">
                        <button className="callToAction-btn" aria-label="Reserve a Table">
                            Reserve a Table
                        </button>
                    </Link>
                </Box>
                <img src={mario_adrian_1} style={{width: "600px"}} title="Brothers Mario and Adrian" alt="brothers Mario and Adrian"/>
            </Box>
        </Box>
    )
}

export default CallToAction;