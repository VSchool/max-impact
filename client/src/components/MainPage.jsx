import React from 'react';
import FeatureCard from './FeatureCard';
import TopicsCovered from './TopicsCovered';
import Benefits from './Benefits';
import './FeaturesContainer.css'; 

const MainPage = () => {
    const topics = [
        { name: 'Leadership', icon: 'fas fa-user-tie' },
        { name: 'Communication', icon: 'fas fa-comments' },
        { name: 'Mindset', icon: 'fas fa-brain' },
        { name: 'Goal Setting', icon: 'fas fa-bullseye' },
        { name: 'Ethics', icon: 'fas fa-balance-scale' },
        { name: 'Employee Engagement', icon: 'fas fa-users' },
        { name: 'Customer Delight', icon: 'fas fa-smile' },
        { name: 'Time Management', icon: 'fas fa-clock' },
        { name: 'Team Building', icon: 'fas fa-users-cog' }
    ];

    return (
        <div>
            <section className="benefits-section">
                <Benefits />
                <section className="features-container">
                <div className="features-section">
                    <h2 className="features">Unique Value Propositions</h2>
                    <div className="features-cards-container">
                        <FeatureCard
                            title="Win-Win-Win"
                            description="This continuous learning program is a Win-Win-Win for all (Win for you – Win for your employees and customers). Our goal is to add value to all who participate in this program."
                            buttonText="Learn More"
                        />
                        <FeatureCard
                            title="Flexibility and Adaptability"
                            description="This program will be available to everyone in your organization. Based on the topic of the week, you can decide who should attend."
                            buttonText="Learn More"
                        />
                        <FeatureCard
                            title="Best Value in the Market"
                            description="Get top-quality training at an unbeatable price. Our program offers high-value learning experiences that deliver impactful results without breaking the bank."
                            buttonText="Learn More"
                        />
                    </div>
                </div>
            </section>
            </section>
            <section className="topics-section">
                <TopicsCovered topics={topics} />
            </section>
            
        </div>
    );
};

export default MainPage;
