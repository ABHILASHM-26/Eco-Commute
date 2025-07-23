import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import your existing styles
import './RegisterPage.css';
const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // New success state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/users/register/', formData);
      if (response.status === 201) {
        setSuccess('Registration successful! Redirecting to homepage...');
        setError('');
        localStorage.setItem('username', formData.name);
        
        // After 2 seconds, navigate to homepage
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="register-page">
      <h1 className="page-title">Register</h1>
      <form onSubmit={handleSubmit} className="register-form">
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

        <div className="input-group">
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="input-field"
          />
        </div>

        {/* Show error or success messages */}
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
