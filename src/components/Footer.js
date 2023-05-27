// Footer.js

import "../styles/styles.css"
import "../styles/Footer.css"
import logo_2 from "../images/logo_2.png";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { Routes, Route, Link } from 'react-router-dom';
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
        label: "Facebook",
    },
    {
        icon: faInstagram,
        url: "https://www.instagram.com/",
        label: "Instagram",
    },
    {
        icon: faTiktok,
        url: "https://www.tiktok.com/",
        label: "TikTok",
    },
    {
        icon: faYoutube,
        url: "https://www.youtube.com",
        label: "YouTube",
    },
];

const Footer = () => {
    return (
        <footer className="footer-container">
                <Box pt ="20" pb="20" className="footer">
                    <div>
                        <HStack>
                            <Box className="footer-logo">
                                <Link to="/" title="Little Lemon Restaurant">
                                    <img
                                        src={logo_2}
                                        style={{width: "65px"}}
                                        title="Little Lemon Restaurant"
                                        alt="Little Lemon footer logo"
                                    />
                                </Link>
                            </Box>
                        </HStack>
                    </div>
                    <div>
                        <nav>
                            <VStack className="footer-nav-links" alignItems="left">
                                <h4 className="footer-header-sitemap">Sitemap</h4>
                                <Link to="/" title="Home page" alt="home page">
                                    Home
                                </Link>
                                <Link to="/reservations" title="Make a reservation" alt="make a reservation">
                                    Reservations
                                </Link>
                                <Link to="/menu" title="Restaurant menu" alt="restaurant menu">
                                    Menu
                                </Link>
                                <Link to="/order" title="Order online" alt="order online">
                                    Order
                                </Link>
                                <Link to="/about" title="About Little Lemon Restaurant" alt="about Little Lemon Restaurant">
                                    About
                                </Link>
                                <Link to="/login" ttile="Login to your account" alt="login to your account">
                                    Login
                                </Link>
                            </VStack>
                        </nav>
                    </div>
                    <div>
                        <Box>
                            <VStack align="left">
                                <address className="footer-address">
                                    <h4 className="footer-header">
                                        Location
                                    </h4>
                                    <p>
                                        813 W. Randolph St
                                    </p>
                                    <p>
                                        Chicago, IL 60654
                                    </p>
                                </address>
                                <section>
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
                                </section>
                            </VStack>
                        </Box>
                        </div>
                        <div>
                            <Box>
                                <VStack align="left" >
                                    <section className="footer-contact">
                                        <h4 className="footer-header">
                                            Contact
                                        </h4>
                                        <Box>
                                            <a href="mailto:eat@littlelemon.com">
                                                <p>eat@littlelemon.com</p>
                                            </a>
                                            <a href="tel:3124920808">
                                                <p>(312)492-0808</p>
                                            </a>
                                        </Box>
                                    </section>
                                    <section>
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
                                    </section>
                                </VStack>
                            </Box>
                        </div>
                </Box>
                <Box className="footer-copyright" textAlign="center" pt="20px" pb="20px">
                    <p>
                        © 2023 Little Lemon Restaurant, LLC. All Rights Reserved
                        <span class="footer-separator">|</span>
                        <a href="/accessibility" title="our commitment to website accessibility">Accessibility</a>
                        <span class="footer-separator">|</span>
                        <a href="privacy-policy" title="our privacy policy">Privacy Policy</a>
                    </p>
                </Box>
        </footer>
    );
};

export default Footer;