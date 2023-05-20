// Main.js

import "../styles/styles.css"
import "../styles/Main.css"
import { Box, HStack, VStack } from "@chakra-ui/react";

function Main() {
    return (
        <main className="main-container">
            <Box>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </Box>
        </main>
    );
}

export default Main;