import React from 'react';
import './Sidebar.css';


const Sidebar = ({ isAdmin }) => {
    const adminLabels = ['Home', 'Search', 'Uploaded Courses', 'Stats', 'Achieve'];
    const userLabels = ['Home', 'Search', 'Payment Method', 'Manage Your Account', 'Achieve'];
  
    const labels = isAdmin ? adminLabels : userLabels;
  
    return (
      <div className={`sidebar ${isAdmin ? 'admin-sidebar' : 'user-sidebar'}`}>
        <ul className="sidebar-list">
          {labels.map((label, index) => (
            <li key={index} className="sidebar-item">{label}</li>
          ))}
        </ul>
      </div>
    );
  };


export default Sidebar;
