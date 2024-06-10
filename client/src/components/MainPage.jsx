import React from 'react';
import FeatureCard from './FeatureCard';
import TopicsCovered from './TopicsCovered';
import Benefits from './Benefits';
import './FeaturesContainer.css'; 
import './Login.css'
import Testimonials from './Testimonials';
import Banner from './Banner';
import ImageTextBlock from './ImageTextBlock';

const MainPage = () => {
    const topics = [
    { name: 'Leadership', icon: '/src/assets/icons/leadership.svg' },
    { name: 'Communication', icon: '/src/assets/icons/communication.svg' },
    { name: 'Mindset', icon: '/src/assets/icons/mindset.svg' },
    { name: 'Goal Setting', icon: '/src/assets/icons/goal_setting.svg' },
    { name: 'Ethics', icon: '/src/assets/icons/ethics.svg' },
    { name: 'Employee Engagement', icon: '/src/assets/icons/employee_engagement.svg' },
    { name: 'Customer Delight', icon: '/src/assets/icons/customer_delight.svg' },
    { name: 'Time Management', icon: '/src/assets/icons/time_management.svg' },
    { name: 'Team Building', icon: '/src/assets/icons/team_buildin.svg' }
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
            <section className="testimonials-section">
                <Testimonials />
            </section>
            <section className='banner-section'>
                <Banner />
            </section>
            <section className='imagetextblock-section'>
                <ImageTextBlock />
            </section>


            <section className="topics-section">
                <TopicsCovered topics={topics} />
            </section>
            
        </div>
    );
};

export default MainPage;
