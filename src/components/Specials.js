// Specials.js

import "../styles/styles.css"
import "../styles/Specials.css"
import greek_salad from '../images/greek_salad.jpg'
import bruschetta from '../images/bruschetta.jpg'
import lemon_dessert from '../images/lemon_dessert.jpg'
import { Box, Card, HStack, VStack } from "@chakra-ui/react"
import { Routes, Route, Link } from 'react-router-dom'
import delivery_icon from '../images/delivery_icon.svg'

const Specials = () => {
    return (
        <Box className="specials-container">
            <Box className="specials">
                <Box className="specials-title">
                    <h2>This Week's Specials!</h2>
                    <Link to="/order">
                            <button className="callToAction-btn" aria-label="Order online" title="Order online">
                                Order Online
                            </button>
                    </Link>
                </Box>
                <Box className="specials-cards" >
                    <Card className="specials-card">
                        <Box>
                            <img src={greek_salad} style={{height: "200px", width: "300px"}} title="greek salad" alt="greek salad" />
                            <h4>Greek Salad</h4>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <Link to="/order">
                                <button className="delivery-btn" aria-label="Order a delivery" title="Order a delivery">
                                    Order a delivery
                                    <img src={delivery_icon} className="delivery-icon" style={{width: "20px"}} title="delivery icon" alt="delivery icon" />
                                </button>
                            </Link>
                        </Box>
                    </Card>
                    <Card className="specials-card">
                        <Box>
                            <img src={bruschetta} style={{height: "200px", width: "300px"}} title="bruschetta" alt="bruschetta" />
                            <h4>Bruschetta</h4>
                            <p>Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, and cured port.</p>
                            <Link to="/order">
                                <Box className="delivery-btn-container">
                                <button className="delivery-btn" aria-label="Order a delivery" title="Order a delivery">
                                    Order a delivery
                                    <img src={delivery_icon} className="delivery-icon" style={{width: "20px"}} title="delivery icon" alt="delivery icon" />
                                </button>
                                </Box>
                            </Link>
                        </Box>
                    </Card>
                    <Card className="specials-card">
                        <Box>
                            <img src={lemon_dessert} style={{height: "200px", width: "300px"}} title="lemon dessert" alt="lemon dessert" />
                            <h4>Lemon Dessert</h4>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <Link to="/order">
                                <button className="delivery-btn" aria-label="Order a delivery" title="Order a delivery">
                                    Order a delivery
                                    <img src={delivery_icon} className="delivery-icon" style={{width: "20px"}} title="delivery icon" alt="delivery icon" />
                                </button>
                            </Link>
                        </Box>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
}

export default Specials;