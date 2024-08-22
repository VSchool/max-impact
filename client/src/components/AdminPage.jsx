import React, { useState } from 'react';
import './AdminPage.css';
import uploadIcon from '/src/assets/icons/upload.svg';
import AdminLesson from './AdminLesson';
import Sidebar from './Sidebar';

const lessons = [
  {
    title: "Class 1",
    date: "Uploaded 5/8/2024",
    imgSrc: "/src/assets/icons/video_card.svg",
  },
  {
    title: "Class 2",
    date: "Uploaded 5/8/2024",
    imgSrc: "/src/assets/icons/video_card.svg",
  },
  {
    title: "Class 3",
    date: "Uploaded 5/8/2024",
    imgSrc: "/src/assets/icons/video_card.svg",
  },
];
const isAdmin  = true

const AdminPage = () => {
  return (
    <div className="admin-page-wrapper">
      <Sidebar isAdmin={true} />

      <div className="admin-page">
      <section className='greetings-admin'>
        <h2>Hello, Admin</h2>
      </section>
        <section className='upload-container'>
        <h2 className='upload-title'>Create a New Class</h2>
        <section className="course-upload-section">
          <input className="clas-name-input" type="text" placeholder="Class Name" />
          <div className="upload-buttons">
            <button className="upload-button">
              <img  src={uploadIcon} alt="Upload Video" />
              Upload Video
            </button>
            <button className="upload-button">
              <img src={uploadIcon} alt="Upload PDF" />
              Upload PDF
            </button>
          </div>
          <button className="publish-button">Publish</button>
          </section>
        </section>
        <section className='uploaded-courses'>
        <h2 className='uploaded-title'>Uploaded Class Videos</h2>
        <section className="uploaded-courses-section">
          <div className="lessons-container">
            {lessons.map((lesson, index) => (
              <AdminLesson key={index} {...lesson} />
            ))}
          </div>
        </section>
        </section>
      </div>
    </div>
  );
};

export default AdminPage;















// import React, { useState } from 'react';
// import './AdminPage.css';
// import uploadIcon from '/src/assets/icons/upload.svg';
// import AdminLesson from './AdminLesson';
// import Sidebar from './Sidebar';

// const lessons = [
//   {
//     title: "Class 1",
//     date: "Uploaded 5/8/2024",
//     imgSrc: "/src/assets/icons/video_card.svg",
//   },
//   {
//     title: "Class 2",
//     date: "Uploaded 5/8/2024",
//     imgSrc: "/src/assets/icons/video_card.svg",
//   },
//   {
//     title: "Class 3",
//     date: "Uploaded 5/8/2024",
//     imgSrc: "/src/assets/icons/video_card.svg",
//   },
// ];
// const isAdmin  = true

// const AdminPage = () => {
//   return (
//     <div className="admin-page-wrapper">
//        <Sidebar isAdmin={isAdmin} />
//       <div className="admin-page">
//         <section className="admin-greeting-section">
//           <h1 className="admin-dashboard-title">Hello, Admin</h1>
//         </section>
//         <h2 className="section-title">New Course Upload</h2>
//         <section className="course-upload-section">
//           <input className="class-name-input" type="text" placeholder="Class Name" />
//           <div className="upload-buttons">
//             <button className="upload-button">
//               <img src={uploadIcon} alt="Upload Video" />
//               Upload Video
//             </button>
//             <button className="upload-button">
//               <img src={uploadIcon} alt="Upload PDF" />
//               Upload PDF
//             </button>
//           </div>
//           <button className="publish-button">Publish</button>
//         </section>
//         <section className="uploaded-courses-section">
//           <h2 className="section-title">Uploaded Course Videos</h2>
//           <div className="lessons-container">
//             {lessons.map((lesson, index) => (
//               <AdminLesson key={index} {...lesson} />
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AdminPage;













