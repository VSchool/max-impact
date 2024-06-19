// AdminLesson.js
import React from 'react';
import './AdminLesson.css';


const AdminLesson = ({ title, date, imgSrc }) => {
  return (
    <div className="lesson">
      <div className="lesson-image-container">
        <img className="lesson-image" src={imgSrc} alt={title} />
      </div>
      <div className="lesson-info">
        <div className="lesson-title-container">
          <div className="lesson-title">{title}</div>
        </div>
        <div className="lesson-date">{date}</div>
  
      </div>
    </div>
  );
};

export default AdminLesson;
