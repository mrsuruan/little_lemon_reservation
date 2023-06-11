// Header.js

import '../styles/styles.css';
import '../styles/Header.css';
import logo_header from "../images/logo_header.png";
import { Box } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { HiMenu, HiOutlineShoppingBag, HiX } from 'react-icons/hi';
import { useState } from 'react';

const Header = () => {

    const [isNavbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    };

    const closeNavbar = () => {
        setNavbarOpen(false);
    };

    return (
        <Box className="header-container">
            <header className="header" >
                <Link className="logo" to="/" title="Little Lemon Restaurant">
                    <img src={logo_header} style={{width: "180px"}} title="Little Lemon Restaurant" alt="Little Lemon logo"/>
                </Link>
                <nav className={`navbar ${isNavbarOpen ? 'responsive_nav' : ''}`} >
                    <Link to="/" className="nav-item" onClick={closeNavbar} title="Home page">Home</Link>
                    <Link to="/reservations" className="nav-item" onClick={closeNavbar} title="Reserve a table">Reservations</Link>
                    <Link to="/menu" className="nav-item" onClick={closeNavbar} title="Restaurant menu">Menu</Link>
                    <Link to="/order" className="nav-item" onClick={closeNavbar} title="Order online">Order</Link>
                    <Link to="/about" className="nav-item" onClick={closeNavbar} title="About Little Lemon Restaurant">About</Link>
                    {/* <Link to="/about" className="nav-item" onClick={closeNavbar} title="About Little Lemon Restaurant" smooth={true} duration={500}>About</Link> */}
                    <Link to="/login" className="nav-item" onClick={closeNavbar} title="Login to your account">Login</Link>
                    <button className="nav-btn nav-close-btn" onClick={toggleNavbar} >
                        <HiX />
                    </button>
                </nav>
                <div id="header-icons">
                    <Link to="/basket" title="Your shopping basket">
                        <button className="nav-btn shopping-basket-icon" >
                            < HiOutlineShoppingBag />
                        </button>
                    </Link>
                    <button className="nav-btn" onClick={toggleNavbar} >
                        <HiMenu />
                    </button>
                </div>
            </header>
        </Box>
    );
}

export default Header;
