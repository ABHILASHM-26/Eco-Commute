// ✅ All imports go at the top
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import './LoginPage.css';
import API_BASE_URL from '../config'; // ✅ Correct import

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/api/users/login/`, formData);

      if (response.status === 200) {
        const { token, name, email } = response.data;

        localStorage.setItem('token', token); // or 'accessToken'
        localStorage.setItem('username', name || email); // fallback to email
        localStorage.setItem('email', email);

        setMessage('✅ Login successful! Redirecting...');
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (err) {
      setMessage('❌ Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-page">
      <h1 className="page-title">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
            className="input-field"
          />
        </div>

        {message && <p className="form-message">{message}</p>}

        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
