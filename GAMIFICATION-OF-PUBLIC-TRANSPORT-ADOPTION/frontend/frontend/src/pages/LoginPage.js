// ✅ All imports go here at the top
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import './LoginPage.css';
import API_BASE_URL from '../config'; // ✅ RIGHT PLACE


const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import './LoginPage.css';
import API_BASE_URL from '../config'; // ✅ Import API base URL

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
        localStorage.setItem('token', response.data.token); // ✅ Use consistent key 'token'
        localStorage.setItem('username', response.data.name || formData.email);
        localStorage.setItem('email', formData.email);
        setMessage('✅ Login successful! Redirecting to home page...');

        setTimeout(() => {
          navigate('/');
        }, 1500); // ⏳ Wait for message to show
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


  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/api/users/login/`, formData);

      if (response.status === 200) {
        const { token, name, email } = response.data;

        localStorage.setItem('accessToken', token);
        localStorage.setItem('username', name || email); // fallback to email if name is not available
        localStorage.setItem('email', email);

        setError('');
        navigate('/');
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
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

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
