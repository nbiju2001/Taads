import React from 'react';
import TopBar from '../components/TopBar';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import TechStacks from '../components/TechStacks';
import LoginSection from '../components/LoginSection';

const Home: React.FC = () => {
  return (
    <div>
      <TopBar />
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <TechStacks />
      <LoginSection />
    </div>
  );
};

export default Home;
