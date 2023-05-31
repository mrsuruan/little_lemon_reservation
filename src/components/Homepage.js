// import Header from "./Header.js"
import CallToAction from "./CallToAction.js"
import Specials from './Specials.js'
import Testimonials from './Testimonials';
import { Box, HStack, VStack } from "@chakra-ui/react";
// import Footer from "./Footer.js"

function Homepage() {
    return (
        <Box>
            <CallToAction />
            <Specials />
            <Testimonials />
        </Box>
    )
}

export default Homepage;