import React, { useState } from 'react';

const LoginSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showLogin = () => {
    setIsVisible(true);
  };

  const hideLogin = () => {
    setIsVisible(false);
  };

  return (
    <section id="loginSection" style={{ display: isVisible ? 'block' : 'none', opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s' }}>
      <div className="container">
        <div className="section-header">
          <h2>Log In</h2>
        </div>
        <div style={{ maxWidth: '400px', margin: '0 auto 3rem auto', padding: '2rem', background: '#222', color: 'white', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <form>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email:</label>
              <input type="email" id="email" name="email" required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password:</label>
              <input type="password" id="password" name="password" required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
            </div>
            <button type="submit" className="btn primary">Log In</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
