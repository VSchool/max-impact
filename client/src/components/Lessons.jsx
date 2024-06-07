import React from 'react';
import './Lessons.css';
import downloadIcon from '/src/assets/icons/download.svg';
import heartIcon from '/src/assets/icons/heart-icon.svg';

const Lesson = ({ title, date, attachment, imgSrc }) => {
    return (
        <div className="lesson">
          <div className="lesson-image-container">
            <img className="lesson-image" src={imgSrc} alt={title} />
            <div className="time-button">
              <span className="time-text">45:00</span>
            </div>
          </div>
          <div className="lesson-info">
            <div className="lesson-title-container">
              <div className="lesson-title">{title}</div>
              <img className="heart-icon" src={heartIcon} alt="Favorite" />
            </div>
            <div className="lesson-date">{date}</div>
            <div className="lesson-attachment">
              <a href="#" className="download-link">
                {attachment}
                <img className="download-icon" src={downloadIcon} alt="Download" />
              </a>
            </div>
          </div>
        </div>
      );
    };
    
export default Lesson;








