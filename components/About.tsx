import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div className="about-table">
          <div className="section-header">
            <h2>About Us</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Roles</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Role 1', 'Role 2', 'Role 3', 'Role 4', 'Role 5', 'Role 6'].map((role, idx) => (
                  <div key={idx} style={{ background: '#eeeeee', padding: '0.7rem 1rem', borderRadius: '8px' }}>{role}</div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Names</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Team Member 1', 'Team Member 2', 'Team Member 3', 'Team Member 4', 'Team Member 5', 'Team Member 6'].map((name, idx) => (
                  <div key={idx} style={{ background: '#e7e7e7', padding: '0.7rem 1rem', borderRadius: '8px' }}>{name}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src="/assets/people_pdf.png" alt="Team working with PDF" />
        </div>
      </div>
    </section>
  );
};

export default About;
