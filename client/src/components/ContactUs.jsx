import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, email, subject, message });
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-header">
        <button className="back-button">
        <img src="/src/assets/icons/back.svg" alt="Back" />
        </button>
        <button className="close-button">
        <img src="/src/assets/icons/close.svg" alt="Close" />
        </button>
      </div>
      <div className="contact-us-content">
        <h1>Contact Us</h1>
        <form className="contact-us-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
            <label className="form-label">Name</label>
          </div>
          <div className="form-group">
            <input 
              type="text" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <label className="form-label">Email</label>
          </div>
          <div className="form-group">
            <input 
              type="text" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
              required 
            />
            <label className="form-label">Subject</label>
          </div>
          <div className="form-group">
            <textarea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
            ></textarea>
            <label className="form-label">Message</label>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
