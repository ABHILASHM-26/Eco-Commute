import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import './LoginPage.css';
import API_BASE_URL from '../config'; 

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/api/users/login/`, formData);

      if (response.status === 200) {
        const { token, name, email } = response.data;

        localStorage.setItem('token', token);
        localStorage.setItem('username', name || email || 'User');
        localStorage.setItem('email', email || formData.email);

        setSuccess('✅ Login successful! Redirecting to homepage...');
        setError('');

        setTimeout(() => navigate('/'), 1500);
      }
    } catch (err) {
      setError('❌ Login failed. Please check your credentials.');
      setSuccess('');
    }
  };

  return (
    <div className="login-page">
      <h1 className="welcome-text">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
