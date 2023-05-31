// TestimonialsCard.js

import '../styles/styles.css'
import '../styles/Testimonials.css'
import { Link } from 'react-router-dom'
import { Box } from "@chakra-ui/react";

const TestimonialsCard = ({ image, name, rating, testimonial }) => {
    return (
        <Box className="testimonials-card">
            <Box>
                <img
                    className="testimonials-card-img"
                    src={ image }
                    title={ ` ${ name }'s testimonial ` }
                    alt={ ` ${ name }'s testimonial ` }
                />
                <h4>{ name }</h4>
                <img
                    className="testimonials-card-rating"
                    src={ rating }
                />
                <p>{ testimonial }</p>
            </Box>
        </Box>
    );
};

export default TestimonialsCard;

