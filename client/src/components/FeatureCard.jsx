import React from 'react';
import './FeatureCard.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const FeatureCard = ({ title, description, buttonText }) => {
    return (
        <div className="feature-card">
            <div className="icon">
                <FontAwesomeIcon icon={faCheckCircle} size="2x" color="#62547D" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <button>{buttonText}</button>
        </div>
    );
};

export default FeatureCard;
