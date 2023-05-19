// Header.js

import '../styles/Header.css'
import logo_small from "../images/logo_small.png";
import { Box, HStack } from "@chakra-ui/react";

const Header = () => {
    return (
        <Box className="header-container">
            <header className="header" >
                <nav className="navbar">
                    <a className="logo" href="/" title="Little Lemon Restaurant">
                        <img src={logo_small} style={{width: "200px"}} title="Little Lemon Restaurant" alt="Little Lemon logo"/>
                    </a>
                    <ul className="nav-links">
                        <li><a href="/" title="Home page">Home</a></li>
                        <li><a href="/menu" title="Restaurant menu">Menu</a></li>
                        <li><a href="/order" title="Order online">Order</a></li>
                        <li><a href="/about" title="About Little Lemon Restaurant">About</a></li>
                        <li><a href="/login" title="Login to your account">Login</a></li>
                    </ul>
                    <a href="/reservations">
                        <button className="reserve-btn" aria-label="Reserve a Table">
                            Reserve a Table
                        </button>
                    </a>
                </nav>
            </header>
        </Box>
    );
}

export default Header;