// OurStory.js

import "../styles/styles.css"
import "../styles/OurStory.css"
import mario_adrian_2 from "../images/mario_adrian_2.jpg";
import { Box, HStack, VStack } from "@chakra-ui/react";


const OurStory = () => {
    return (
        <Box className="ourStory-container">
            <Box className="ourStory">
                <Box>
                    <Box className="ourStory-text">
                        <h2>Our Story</h2>
                        <p>As one of the first restaurants on Chicago’s famed Restaurant Row in the West Loop, Mario and Adrian created Little Lemon in 2012 with a goal of serving authentic Mediterranean flavors to our local community and visitors. Since then, our desire to treat guests like family has remained the same as have our pizza! – but our seasonal flavors,  wine and locally-rooted beer are ever-changing.</p>
                    </Box>
                </Box>
                <img src={mario_adrian_2} style={{width: "600px"}} title="Brothers Mario and Adrian" alt="brothers Mario and Adrian"/>
            </Box>
        </Box>
    )
}

export default OurStory;