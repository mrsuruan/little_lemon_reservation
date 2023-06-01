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
                    title={`${ name }'s headshot photo`}
                    alt={`${ name }'s headshot photo`}
                />
                <h4 title={`${ name }'s name`} alt={`${ name }'s name`} >
                    { name }
                </h4>
                <img
                    className="testimonials-card-rating"
                    src={ rating }
                    title={`${ name }'s 5-star rating`}
                    alt={`${ name }'s 5-star rating`}
                />
                <p title={`${ name }'s testimonial`} alt={`${ name }'s testimonial`} >
                    { testimonial }
                </p>
            </Box>
        </Box>
    );
};

export default TestimonialsCard;

