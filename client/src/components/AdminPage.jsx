// AdminPage.js
import React from 'react';
import './AdminPage.css';
import uploadIcon from '/src/assets/icons/upload.svg';
import AdminLesson from './AdminLesson';
import Sidebar from './Sidebar';


const lessons = [
  {
    title: "Class 1",
    date: "Uploaded 5/8/2024",
    attachment: "Download Attachment",
    imgSrc: "/src/assets/icons/video_card.svg",
  },
  {
    title: "Class 1",
    date: "Uploaded 5/8/2024",
    attachment: "Download Attachment",
    imgSrc: "/src/assets/icons/video_card.svg",
  },
  {
    title: "Class 1",
    date: "Uploaded 5/8/2024",
    attachment: "Download Attachment",
    imgSrc: "/src/assets/icons/video_card.svg",
  },

];

const AdminPage = () => {
    return (
        <>
        <div className="admin-page">
        <Sidebar isAdmin={true} />
          <section className="admin-greeting-section">
            <h1 className="admin-dashboard-title">Hello, Admin</h1>
          </section>
          <h2 className="section-title">New Course Upload</h2>
          <section className="course-upload-section">
            <input className="class-name-input" type="text" placeholder="Class Name" />
            <div className="upload-buttons">
              <button className="upload-button">
                <img src={uploadIcon} alt="Upload Video" />
                Upload Video
              </button>
              <button className="upload-button">
                <img src={uploadIcon} alt="Upload PDF" />
                Upload PDF
              </button>
            </div>
            <button className="publish-button">Publish</button>
          </section>
          <section className="uploaded-courses-section">
            <h2 className="section-title">Uploaded Course Videos</h2>
            <div className="lessons-container">
              {lessons.map((lesson, index) => (
                <AdminLesson key={index} {...lesson} />
              ))}
            </div>
          </section>
          
       </div>
       </>
    );
  };
  
  export default AdminPage;

