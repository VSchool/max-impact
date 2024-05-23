import React from 'react';
import './Benefits.css'; 
const benefits = [
    { name: 'Personal and Professional Development', icon: '/src/assets/icons/personal-development.svg' },
    { name: 'Greater Employee Engagement and Retention', icon: '/src/assets/icons/employee-engagement.svg' },
    { name: 'Increase Productivity that Positively Influences the Bottom Line', icon: '/src/assets/icons/productivity.svg' },
    { name: 'Increase in Morale and Employee Satisfaction', icon: '/src/assets/icons/morale.svg' },
    { name: 'Better Position Your Organization as an EXCELLENT Place to Work', icon: '/src/assets/icons/position.svg' }
];

const Benefits = () => {
    return (
        <div className="benefits-container">
            <div className="benefits-icons-container">
                {benefits.map(benefit => (
                    <div className="benefit" key={benefit.name}>
                        <img src={benefit.icon} alt={benefit.name} className="benefit-icon" />
                        <span className="benefit-label">{benefit.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Benefits;
