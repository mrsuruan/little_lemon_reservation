// import Header from "./Header.js"
import CallToAction from "./CallToAction.js"
import Specials from './Specials.js'
import { Box, HStack, VStack } from "@chakra-ui/react";
// import Footer from "./Footer.js"

function Homepage() {
    return (
        <Box>
            <CallToAction />
            <Specials />
        </Box>
    )
}

export default Homepage;