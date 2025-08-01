import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../App.css';

function HomePage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="home-page">
      <Navbar />

      {/* Banner with image */}
      <div className="home-banner">
        <div className="banner-content">
          <div className="banner-text">
            <h1 className="banner-title">Welcome to EcoCommute</h1>
            <p className="banner-subtitle">Incentivizing Sustainability.</p>
          </div>
        </div>
      </div>
      <div className="home-content">
        <div className="image-left">
          <img
            src="https://www.shutterstock.com/image-vector/big-black-bus-vector-image-600nw-2473900693.jpg"
            alt="Bus Illustration"
            width="150"
          />
        </div>
        <h1 
  className="welcome-text" 
  style={{ 
    fontSize: '3rem', 
    fontWeight: 'bold', 
    color: '#00c853', // Fresh green
    textShadow: '0px 2px 6px rgba(0, 200, 83, 0.3)'
  }}
>
  EcoCommute🌎
</h1>
        <p className="home-description">Earn rewards, save the environment, and track your progress by using EcoCommute.</p>
        <p className="home-description">Our Team Goal is to generate interest in the public to use public transport over private.</p>
        <p className="home-description">Our steps towards achieving this goal include reducing carbon emission & congestion.</p>
        <p className="home-description">EcoCommute gamifies this journey by letting users book rides,earn tokens and rewards.</p>
      </div>
      <footer className="home-footer">
  <p>🌿 EcoCommute &copy; 2025 | Making Public Transport Rewarding</p>
  <a
    href="https://www.linkedin.com/in/abhilashmellacheruvu/"
    target="_blank"
    rel="noopener noreferrer"
    className="linkedin-link"
  >
    Developed by  
    | Abhilash M
  </a>
</footer>

    </div>
  );
}

export default HomePage;
