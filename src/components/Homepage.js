// Homepage.js

import CallToAction from "./CallToAction";
import Specials from './Specials';
import Testimonials from './Testimonials';
import OurStory from './OurStory';
import { Box } from "@chakra-ui/react";
// import { Link } from 'react-router-dom';
// import { Element } from 'react-scroll';

function Homepage() {
    return (
        <Box>
            <CallToAction />
            <Specials />
            <Testimonials />
            {/* <Element name="about" className="element"> */}
            <OurStory />
            {/* </Element> */}
        </Box>
    )
}

export default Homepage;