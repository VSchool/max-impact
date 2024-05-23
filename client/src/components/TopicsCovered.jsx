import React from 'react';
import './TopicsCovered.css';

const TopicsCovered = ({topics}) => {
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
