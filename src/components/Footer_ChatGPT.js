/* Footer.css */
.footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Example: 4 equal columns */
    grid-gap: 20px; /* Example: spacing between grid items */
  }
  
  /* Footer.js */
  import "../styles/Footer.css";
  import logo_2 from "../images/logo_2.png";
  import { Box, HStack, VStack } from "@chakra-ui/react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faFacebook,
    faInstagram,
    faTiktok,
    faYoutube,
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
      <footer>
        <Box className="footer-background">
          <Box pt="20" pb="20" className="footer-grid"> {/* Updated className */}
            <div> {/* Grid Item 1 */}
              <HStack>
                <Box className="footer-logo">
                  <a href="/" title="Little Lemon Restaurant">
                    <img
                      src={logo_2}
                      style={{ width: "50px" }}
                      title="Little Lemon Restaurant"
                      alt="Little Lemon footer logo"
                    />
                  </a>
                </Box>
              </HStack>
            </div>
            <div> {/* Grid Item 2 */}
              <nav>
                <VStack alignItems="left">
                  <h4 className="footer-header">Sitemap</h4>
                  <ul className="footer-nav-links">
                    <li>
                      <a href="/" title="home page">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/reservations" title="make a reservation">
                        Reservations
                      </a>
                    </li>
                    <li>
                      <a href="/menu" title="restaurant menu">
                        Menu
                      </a>
                    </li>
                    <li>
                      <a href="/order" title="order online">
                        Order
                      </a>
                    </li>
                    <li>
                      <a href="/about" title="about Little Lemon Restaurant">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/login" title="login to your account">
                        Login
                      </a>
                    </li>
                  </ul>
                </VStack>
              </nav>
            </div>
            <div> {/* Grid Item 3 */}
              <VStack align="left">
                <address marginBottom="10px" className="footer-address">
                  <h4 className="footer-header">Location</h4>
                  <p>813 W. Randolph St</p>
                  <p>Chicago, IL 60654</p>
                </address>
                <section>
                  <h4 className="footer-header">Hours</h4>
                  <p>Sunday - Thursday</p>
                  <p>5:00 PM - 10:00 PM</p>
                  <p>Friday - Saturday</p>
                 
  