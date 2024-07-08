import React, { useState } from 'react';
import Sidebar from './Sidebar'; 
import './achieve.css'; 
import Lesson from './Lessons';
import { useAdmin } from '../providers/AdminProvider';



const Archive = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const isAdmin = useAdmin()

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

  return (
    <div className="achieve-page">
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>
      <Sidebar isAdmin={isAdmin} isOpen={isSidebarOpen} />
       <div className='test'>
      <section className="achieve-greeting-section">
        <h1 className="achieve-dashboard-title">Archive</h1>
      </section>
      <section className="quarter-buttons-section">
        <div className="quarter-buttons-container">
          <button className="quarter-button">Q1</button>
          <button className="quarter-button">Q2</button>
          <button className="quarter-button">Q3</button>
          <button className="quarter-button">Q4</button>
        </div>
      </section>
      <section className="archieve-course-videos-section">
      <div className="top-nav">
          <h2 className="section_title">Q1- Jan-Feb 2024</h2>
          <div className="left-arrow">{"<"}</div>
          <div className="right-arrow">{">"}</div>
          </div>
        <div className="archieve-videos-container">
          {lessons.map((lesson, index) => (
          <Lesson key={index} {...lesson} isAdmin={isAdmin} />
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default Archive;
