// Specials.js

import "../styles/styles.css"
import "../styles/Specials.css"
import greek_salad from '../images/greek_salad.jpg'
import bruschetta from '../images/bruschetta.jpg'
import lemon_dessert from '../images/lemon_dessert.jpg'
import { Box, HStack, VStack } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import SpecialsCard from './SpecialsCard.js'

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
                    <SpecialsCard
                        image={ greek_salad }
                        title="Greek Salad"
                        price="$12.50"
                        description="The famous Greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons."
                    />
                    <SpecialsCard
                        image={ bruschetta }
                        title="Bruschetta"
                        price="$7.50"
                        description="Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, and cured pork."
                    />
                    <SpecialsCard
                        image={ lemon_dessert }
                        title="Lemon Dessert"
                        price="$5.50"
                        description="This comes straight from grandma’s recipe book. Every last ingredient has been sourced and is as authentic as can be imagined."
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Specials;