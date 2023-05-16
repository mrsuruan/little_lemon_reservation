// Footer.js

import "../styles/Footer.css"
import logo_2 from "../images/logo_2.png";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTiktok,
    faYoutube
    } from "@fortawesome/free-brands-svg-icons";

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
    },
];

const Footer = () => {
    return (
        <Box className="footer-background">
            <Box as="footer" pt ="20" pb="20" className="footer">
                <HStack px={10} justifyContent="space-between" alignItems="top" >
                    <Box className="footer-logo">
                        <a href="/">
                            <img src={logo_2} style={{width: "50px"}} alt="Little Lemon footer logo"/>
                        </a>
                    </Box>
                    <Box>
                        <VStack alignItems="left">
                            <h4 className="footer-header">Sitemap</h4>
                            <ul className="footer-nav-links">
                                <li><a href="/">Home</a></li>
                                <li><a href="/reservations">Reservations</a></li>
                                <li><a href="/menu">Menu</a></li>
                                <li><a href="/order">Order</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/login">Login</a></li>
                            </ul>
                        </VStack>
                    </Box>
                    <Box>
                        <VStack align="left">
                            <Box marginBottom="10px">
                                <h4 className="footer-header">
                                    Location
                                </h4>
                                <p>
                                    813 W. Randolph St
                                </p>
                                <p>
                                    Chicago, IL 60654
                                </p>
                            </Box>
                            <Box>
                                <h4 className="footer-header">
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
                            </Box>
                        </VStack>
                    </Box>
                    <Box>
                        <VStack align="left" >
                            <Box marginBottom="10px">
                                <h4 className="footer-header">
                                    Contact
                                </h4>
                                <Box className="footer-contact">
                                    <a href="mailto:eat@littlelemon.com">
                                        <p>eat@littlelemon.com</p>
                                    </a>
                                    <a href="tel:3124920808">
                                        <p>(312)492-0808</p>
                                    </a>
                                </Box>
                            </Box>
                            <Box>
                                <h4 className="footer-header">
                                    Follow us
                                </h4>
                                <HStack spacing="15px">
                                    {socials.map(({ icon, url }) => (
                                        <a
                                        key={url}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-social-icons"
                                        >
                                            <FontAwesomeIcon icon={icon} size="1.5x" key={url} color="#EDEFEE" />
                                        </a>
                                    ))}
                                </HStack>
                            </Box>
                        </VStack>
                    </Box>
                </HStack>
                <Box className="footer-copyright" textAlign="center" pt="20px">
                    <p>
                        © 2023 Little Lemon Restaurant, LLC. All Rights Reserved
                        <span class="footer-separator">|</span>
                        <a href="/accessibility">Accessibility</a>
                        <span class="footer-separator">|</span>
                        <a href="privacy-policy">Privacy Policy</a>
                    </p>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;