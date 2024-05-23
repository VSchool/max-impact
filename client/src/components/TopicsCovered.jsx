import React from 'react';
import './TopicsCovered.css';

const topics = [
    { name: 'Leadership', icon: '/src/assets/icons/leadership.svg' },
    { name: 'Communication', icon: '/src/assets/icons/communication.svg' },
    { name: 'Mindset', icon: '/src/assets/icons/mindset.svg' },
    { name: 'Goal Setting', icon: '/src/assets/icons/goal_setting.svg' },
    { name: 'Ethics', icon: '/src/assets/icons/ethics.svg' },
    { name: 'Employee Engagement', icon: '/src/assets/icons/employee_engagement.svg' },
    { name: 'Customer Delight', icon: '/src/assets/icons/customer_delight.svg' },
    { name: 'Time Management', icon: '/src/assets/icons/time_management.svg' },
    { name: 'Team Building', icon: '/src/assets/icons/team_buildin.svg' },
];

const TopicsCovered = () => {
    return (
        <div className="topics-covered-container">
            <h2 className="topics-covered-header">Topics Covered</h2>
            <div className="topics-icons-container">
                {topics.map(topic => (
                    <div className="topic" key={topic.name}>
                        <img src={topic.icon} alt={topic.name} className="topic-icon" />
                        <span className="topic-label">{topic.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopicsCovered;
