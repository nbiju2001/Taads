import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="stats" style={{ background: '#324279' }}>
      <div className="container">
        <div className="section-header">
          <h2>TEAM MEMBERS</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          {['Team Member 1', 'Team Member 2', 'Team Member 3', 'Team Member 4', 'Team Member 5', 'Team Member 6'].map((member, idx) => (
            <div key={idx} className="stat-item" style={{ background: '#222', color: 'white', padding: '1.5rem 2rem', borderRadius: '12px', width: '150px', textAlign: 'center' }}>
              <span>{member}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
