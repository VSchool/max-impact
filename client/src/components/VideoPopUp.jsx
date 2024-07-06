import React from 'react';
import './VideoPopUp.css';

const VideoPopUp = () => {
  return (
    <div className="video-pop-up">
      <div className="navigation-icons">
        <button className="back-button">←</button>
        <button className="close-button">×</button>
      </div>
      <div className="video-container">
        <img className="video-thumbnail" src="/src/assets/icons/video_card.svg" alt="Video Thumbnail" />
      </div>
      <div className="video-info">
        <p>Class 1 Headline</p>
        <a href="attachment_url" download>Download Attachment</a>
        <p>This is the text summary of the video. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lorem eget nisi tristique ultricies. Phasellus quis sapien ut massa vestibulum pretium. Nulla facilisi. Cras auctor massa eu turpis tincidunt, sed consectetur lorem consequat. Mauris non justo vel elit lacinia bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi ac lorem nec libero condimentum scelerisque. Integer at ligula vel justo fermentum efficitur. Nullam sit amet ultrices velit. Fusce at velit ac libero gravida dapibus. In hac habitasse platea dictumst. Sed at purus vel lorem posuere condimentum. Donec sagittis consectetur velit, non interdum leo venenatis vel. Nullam convallis augue nec nulla efficitur, in vehicula dui cursus. Suspendisse in eros quis justo consectetur tempus vel sed neque.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lorem eget nisi tristique ultricies. Phasellus quis sapien ut massa vestibulum pretium. Nulla facilisi. Cras auctor massa eu turpis tincidunt, sed consectetur lorem consequat. Mauris non justo vel elit lacinia bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi ac lorem nec libero condimentum scelerisque. Integer at ligula vel justo fermentum efficitur. Nullam sit amet ultrices velit. Fusce at velit ac libero gravida dapibus. In hac habitasse platea dictumst. Sed at purus vel lorem posuere condimentum. Donec sagittis consectetur velit, non interdum leo venenatis vel. Nullam convallis augue nec nulla efficitur, in vehicula dui cursus. Suspendisse in eros quis justo consectetur tempus vel sed neque.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lorem eget nisi tristique ultricies. Phasellus quis sapien ut massa vestibulum pretium. Nulla facilisi. Cras auctor massa eu turpis tincidunt, sed consectetur lorem consequat. Mauris non justo vel elit lacinia bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi ac lorem nec libero condimentum scelerisque. Integer at ligula vel justo fermentum efficitur. Nullam sit amet ultrices velit. Fusce at velit ac libero gravida dapibus. In hac habitasse platea dictumst. Sed at purus vel lorem posuere condimentum. Donec sagittis consectetur velit, non interdum leo venenatis vel. Nullam convallis augue nec nulla efficitur, in vehicula dui cursus. Suspendisse in eros quis justo consectetur tempus vel sed neque..</p>
      </div>
    </div>
  );
};

export default VideoPopUp;
