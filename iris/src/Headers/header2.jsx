import React from 'react';
import './header2.css'; 



const AidaHeader = ({ onClose, logoSrc }) => {
  return (
    <header className="header-container">
      {/* Left menu icon */}
      <div className="menu-icon">
        <button className="menu-button">
          <svg 
            className="menu-svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Center content */}
      <div className="center-content">
        <div className="logo-circle">
          <img src="https://i.pinimg.com/originals/fa/67/2a/fa672a783d5de2b181827e1cf0fb5ffc.png" alt="logo" className="logo-image" />
        </div>
        <h1 className="header-title">AIDA Framework</h1>
      </div>

      {/* Right close button */}
      <div className="close-button-container">
        <button 
          onClick={onClose}
          className="close-button"
        >
          <svg 
            className="close-svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span className="close-text">Close</span>
        </button>
      </div>
    </header>
  );
};

export default AidaHeader;
