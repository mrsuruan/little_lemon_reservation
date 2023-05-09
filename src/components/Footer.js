import logo_2 from "../images/logo_2.png";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTiktok,
    faYoutube
    } from "@fortawesome/free-brands-svg-icons";

// function SocialLinks() {
//     return (
//         <a href="https:facebook.com/">
//             <FontAwesomeIcon icon={faFacebook} size="small"/>
//         </a>
//     )
// }

const socials = [
    {
        icon: faFacebook,
        url: "https://www.facebook.com",
    },
    {
        icon: faInstagram,
        url: "https://www.instagram.com/"
    },
    {
        icon: faTiktok,
        url: "https://www.tiktok.com/"
    },
    {
        icon: faYoutube,
        url: "https://www.youtube.com"
    }
];


function Footer() {
    return (
        <footer>
            <Box maxWidth="1280px" margin="0 auto">
                <HStack
                    px={100}
                    justifyContent="space-between"
                    alignItems="top"
                >
                    <a href="/">
                        <img src={logo_2} style={{width: "50px"}} alt="Little Lemon footer logo"/>
                    </a>
                    <VStack alignItems="left">
                        <h4>
                            Sitemap
                        </h4>
                            <a href="/">Home</a>
                            <a href="/menu">Menu</a>
                            <a href="/order">Order</a>
                            <a href="/about">About</a>
                            <a href="/login">Login</a>
                            <a href="/reservations">Reservations</a>
                    </VStack>
                    <VStack alignItems="left">
                        <h4>
                            Location
                        </h4>
                        <p>
                            813 W. Randolph St
                        </p>
                        <p>
                            Chicago, IL 60654
                        </p>
                        <h4>
                            Hours
                        </h4>
                        <p>
                            Sunday - Thursday
                        </p>
                        <p>
                            5:00 PM - 10:00 PM
                        </p>
                        <p>
                            Friday - Saturday
                        </p>
                        <p>
                            4:00 PM - 10:00 PM
                        </p>
                    </VStack>
                    <VStack>
                        <h4>
                            Contact
                        </h4>
                        <p>
                            <a href="mailto:eat@littlelemon.com">eat@littlelemon.com</a>
                        </p>
                        <p>
                            <a href="tel:3124920808">(312)492-0808</a>
                        </p>
                        <h4>
                            Follow us
                        </h4>
                        <HStack>
                            {socials.map(({ icon, url }) => (
                                <a
                                key={url}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={icon} size="1x" key={url} />
                                </a>
                            ))}

                        </HStack>
                        
                    </VStack>

                </HStack>
                <p>
                    © 2023 Little Lemon Restaurant, LLC. All Rights Reserved | Accessibility | Privacy Policy
                </p>
            </Box>
        </footer>
    );
}

export default Footer;