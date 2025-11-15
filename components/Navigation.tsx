import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-links" style={{ float: 'right' }}>
          <li><a href="#home">Home</a></li>
          <li><a href="#login">Log in</a></li>
          <li><a href="#stacks">Stacks</a></li>
          <li><a href="#PDFs">PDFs</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="nav-search" style={{ position: 'relative', display: 'inline-block' }}>
          <i className="fas fa-search" style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', color: '#423434' }}></i>
          <input type="search" placeholder="Search PDFs..." style={{ padding: '6px 10px 6px 30px', borderRadius: '6px', border: '1px solid #db2e2e' }} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
