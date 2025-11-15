import React from 'react';

const TechStacks: React.FC = () => {
  return (
    <section id="stacks" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Tech Stacks</h2>
        </div>
        <div className="services-grid">
          {['Name of Module', 'Name of Module', 'Name of Module', 'Name of Module', 'Name of Module'].map((module, idx) => (
            <div key={idx} className="service-card"><h3>{module}</h3></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStacks;
