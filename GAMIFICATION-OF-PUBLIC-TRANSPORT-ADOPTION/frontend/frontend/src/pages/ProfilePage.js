import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../App.css';

const ProfilePage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username') || 'User';
    const storedEmail = localStorage.getItem('email') || 'Email Not Available';

    setUsername(storedUsername);
    setEmail(storedEmail);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    navigate('/login');
  };

  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-container">
        <h1 className="page-title">Profile</h1>
        <div className="profile-card">
          <p className="profile-info"><strong>Username:</strong> {username}</p>
          <p className="profile-info"><strong>Email:</strong> {email}</p>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
