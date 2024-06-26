// LessonsDisplayArea.js


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
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
      <div className="lessons-display-area">
        <button className="hamburger" onClick={toggleSidebar}>
          ☰
        </button>
        <Sidebar isOpen={isSidebarOpen} />
        <section className="user-greeting-section">
          <h1 className="dashboard-title">Hello, [User Name]</h1>
        </section>
        <section className="favorites-section">
          <h2 className="section-title">Favorites</h2>
          <div className="lessons-container">
            {lessons.slice(0, 1).map((lesson, index) => (
              <Lesson key={index} {...lesson} />
            ))}
          </div>
        </section>
        <section className="recent-course-videos-section">
          <h2 className="section-title">Recent Course Videos</h2>
          <div className="lessons-container">
            {lessons.map((lesson, index) => (
              <Lesson key={index} {...lesson} />
            ))}
          </div>
        </section>
      </div>
    );
};

export default LessonsDisplayArea;









// import React from 'react';
// import Lesson from './Lessons';
// import './LessonsDisplayArea.css';
// import Sidebar from './Sidebar';

// const lessons = [
//     {
//       title: "Class 1",
//       date: "Uploaded 5/8/2024",
//       attachment: "Download Attachment",
//       imgSrc: "/src/assets/icons/video_card.svg",
//     },
//     {
//       title: "Class 2",
//       date: "Uploaded 5/8/2024",
//       attachment: "Download Attachment",
//       imgSrc: "/src/assets/icons/video_card.svg",
//     },
//   ];
  
//   const LessonsDisplayArea = () => {
//     return (
//       <div className="lessons-display-area">
//         <Sidebar />
//         <section className="user-greeting-section">
//           <h1 className="dashboard-title">Hello, [User Name]</h1>
//         </section>
//         <section className="favorites-section">
//           <h2 className="section-title">Favorites</h2>
//           <div className="lessons-container">
//             {lessons.slice(0, 1).map((lesson, index) => (
//               <Lesson key={index} {...lesson} />
//             ))}
//           </div>
//         </section>
//         <section className="recent-course-videos-section">
//           <h2 className="section-title">Recent Course Videos</h2>
//           <div className="lessons-container">
//             {lessons.map((lesson, index) => (
//               <Lesson key={index} {...lesson} />
//             ))}
//           </div>
//         </section>
//       </div>
//     );
//   };
// export default LessonsDisplayArea;
