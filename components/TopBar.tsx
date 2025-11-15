import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="contact-info">
          <a href="mailto:PDF@extract.com">
            <i className="fas fa-envelope"></i> PDF@extract.com
          </a>
        </div>
        <div className="social-links"></div>
      </div>
    </div>
  );
};

export default TopBar;
