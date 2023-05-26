// Header.js

import '../styles/Header.css'
import logo_small from "../images/logo_small.png";
import { Box, HStack } from "@chakra-ui/react";
import { Routes, Route, Link} from 'react-router-dom';

const Header = () => {
    return (
        <Box className="header-container">
            <header className="header" >
                <nav className="navbar">
                    <Link className="logo" to="/" title="Little Lemon Restaurant">
                        <img src={logo_small} style={{width: "200px"}} title="Little Lemon Restaurant" alt="Little Lemon logo"/>
                    </Link>
                    <HStack className="nav-links" spacing={20}>
                        <Link to="/" className="nav-item" title="Home page">Home</Link>
                        <Link to="/menu" className="nav-item" title="Restaurant menu">Menu</Link>
                        <Link to="/order" className="nav-item" title="Order online">Order</Link>
                        <Link to="/about" className="nav-item" title="About Little Lemon Restaurant">About</Link>
                        <Link to="/login" className="nav-item" title="Login to your account">Login</Link>
                    </HStack>
                    <Link to="/reservations">
                        <button className="reserve-btn" aria-label="Reserve a Table">
                            Reserve a Table
                        </button>
                    </Link>
                </nav>
            </header>
        </Box>
    );
}

export default Header;