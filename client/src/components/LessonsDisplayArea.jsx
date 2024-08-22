
// LessonsDisplayArea.js
import React, { useState } from 'react';
import Lesson from './Lessons';
import './LessonsDisplayArea.css';
import Sidebar from './Sidebar';

const lessons = [
    {
      title: "Class 1",
      date: "Uploaded 5/8/2024",
      attachment: "Download Attachment",
      imgSrc: "/src/assets/icons/video_card.svg",
    },
    {
      title: "Class 2",
      date: "Uploaded 5/8/2024",
      attachment: "Download Attachment",
      imgSrc: "/src/assets/icons/video_card.svg",
    },
];

const LessonsDisplayArea = () => {

    return (
      <div className="lessons-display-area">
        <Sidebar />
        <section className='course-section'>
        <section className='greetings-user'>
        <h2>Hello, User</h2>
        </section>
        <section className="favorites-section">
          
          <h2 className="section-title">Favorites</h2>
          <div className="lesson-container">
            {lessons.slice(0, 1).map((lesson, index) => (
              <Lesson key={index} {...lesson} />
            ))}
          </div>
        </section>
        <section className="recent-course-videos-section">
          <h2 className="section-title">Recent Course Videos</h2>
          <div className="lesson-container">
            {lessons.map((lesson, index) => (
              <Lesson key={index} {...lesson} />
            ))}
          </div>
        </section>
        </section>
      </div>
    );
};

export default LessonsDisplayArea;









