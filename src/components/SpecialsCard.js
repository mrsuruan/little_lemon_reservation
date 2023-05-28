// SpecialsCard.js

import '../styles/styles.css'
import '../styles/Specials.css'
import delivery_icon from '../images/delivery_icon.svg'
import { Link } from 'react-router-dom'
import { Box } from "@chakra-ui/react";

const SpecialsCard = ({ image, title, price, description }) => {
    return (
        <Box className="specials-card">
            <Box>
                <img
                    className="specials-card-img"
                    src={ image }
                    title={ title }
                    alt={ title }
                />
                <h4 className="specials-card-price">{ price }</h4>
                <h4>{ title }</h4>
                <p>{ description }</p>
                <Link to="/order">
                    <button className="delivery-btn" aria-label="Order a delivery" title="Order a delivery">
                        Order a delivery
                        <img
                            src={ delivery_icon }
                            className="delivery-icon"
                            style={{ width: "20px" }}
                            title="delivery icon"
                            alt="delivery icon"
                        />
                    </button>
                </Link>
            </Box>
        </Box>
    );
};

export default SpecialsCard;

