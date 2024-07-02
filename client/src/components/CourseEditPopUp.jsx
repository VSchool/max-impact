import React from 'react';
import './CourseEditPopUp.css';
import trashIcon from '/src/assets/icons/trash.svg'; // update path accordingly

const CourseEditPopup = () => {
    return (
      <div className="course-edit-popup">
        <div className="navigation-icons">
          <button className="back-btn">←</button>
          <button className="close-btn">×</button>
        </div>
        <input type="text" className="class-name-input" placeholder="Class Name" />
        <div className="course-upload-container">
          <div className="video-thumbnail-container">
            <div className="watched-video-card">
              <img src="/src/assets/icons/video_card.svg" alt="Video Thumbnail" className="video-placeholder-image" />
              <div className="edit-trash-button">
                <img src={trashIcon} alt="Trash" />
              </div>
            </div>
            <div className="class-info">
              <div className="class-title">Class 1</div>
              <div className="upload-date">Uploaded 5/8/2024</div>
            </div>
          </div>
          <div className="pdf-thumbnail-container">
            <div className="pdf-preview">
              <img src="/src/assets/icons/pdf.svg" alt="PDF Preview" className="pdf-preview-placeholder" />
              <div className="edit-trash-button">
                <img src={trashIcon} alt="Trash" />
              </div>
            </div>
            <div className="pdf-info">
              <div className="pdf-title">Attachment for Video 1</div>
              <div className="upload-date">Uploaded 5/8/2024</div>
            </div>
          </div>
        </div>
        <button className="publish-btn">Publish</button>
      </div>
    );
  };
  
  export default CourseEditPopup;



// import React from 'react';
// import './CourseEditPopUp.css';
// import trashIcon from '/src/assets/icons/trash.svg'; // update path accordingly

// const CourseEditPopup = () => {
//     return (
//       <div className="course-edit-popup">
//         <div className="navigation-icons">
//           <button className="back-btn">←</button>
//           <button className="close-btn">×</button>
//         </div>
//         <input type="text" className="class-name-input" placeholder="Class Name" />
//         <div className="course-upload-container">
//           <div className="video-thumbnail-container">
//             <div className="watched-video-card">
//               <img src="/src/assets/icons/video_card.svg" alt="Video Thumbnail" className="video-placeholder-image" />
//               <div className="edit-trash-button">
//                 <img src={trashIcon} alt="Trash" />
//               </div>
//             </div>
//             <div className="class-info">
//               <div className="class-title">Class 1</div>
//               <div className="upload-date">Uploaded 5/8/2024</div>
//             </div>
//           </div>
//           <div className="pdf-thumbnail-container">
//             <div className="pdf-preview">
//               <img src="/src/assets/icons/pdf.svg" alt="PDF Preview" className="pdf-preview-placeholder" />
//               <div className="edit-trash-button">
//                 <img src={trashIcon} alt="Trash" />
//               </div>
//             </div>
//             <div className="pdf-info">
//               <div className="pdf-title">Attachment for Video 1</div>
//               <div className="upload-date">Uploaded 5/8/2024</div>
//             </div>
//           </div>
//         </div>
//         <button className="publish-btn">Publish</button>
//       </div>
//     );
//   };
  
//   export default CourseEditPopup;