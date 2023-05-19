// Main.js

import "../styles/Main.css"
import { Box, HStack, VStack } from "@chakra-ui/react";

function Main() {
    return (
        <main className="main-container">
            <Box>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </Box>
        </main>
    );
}

export default Main;