import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero" style={{ position: 'relative' }}>
      <div className="container">
        <div className="pdf-floating-icon">
          <img src="/assets/pdf.png" alt="PDF Icon" />
        </div>
        <div className="hero-content">
          <div className="scroll-velocity-container">
            <h1 className="scroll-velocity-text">Maria jee... What Should I write Here?</h1>
          </div>
          <div className="cta-buttons">
            <a href="#contact" className="btn primary">Get Started</a>
            <a href="#stacks" className="btn secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
