// Testimonials.js

import "../styles/styles.css";
import "../styles/Testimonials.css";
import face_elise from '../images/face_elise.png';
import face_dina from '../images/face_dina.png';
import face_tyler from '../images/face_tyler.png';
import rating from '../images/rating.png';
import { Box, HStack, VStack } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import TestimonialsCard from './TestimonialsCard';

const Testimonials = () => {
    return (
        <Box className="testimonials-container">
            <Box className="testimonials">
                <h2>Testimonials</h2>
                <Box className="testimonials-cards" >
                    <TestimonialsCard
                        image={ face_elise }
                        name="Elise"
                        rating={ rating }
                        testimonial="My favorite restaurant in the city! Their spaghetti is truly my all time favorite. The service is always up beat and knowledgeable. I return here often."
                    />
                    <TestimonialsCard
                        image={ face_dina }
                        name="Dina"
                        rating={ rating }
                        testimonial="It can all be said in one delicious word - SPAGHETTI!We'll, maybe two - PIZZA! You can't go wrong with them! If you must deviate from plan A, the chicken is delightful!"
                    />
                    <TestimonialsCard
                        image={ face_tyler }
                        name="Tyler"
                        rating={ rating }
                        testimonial="So good! Totally exceeded my expectations. Every dish was exceptional. The portions and prices were very reasonable, and the hospitality was great. This place is a must!"
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Testimonials;