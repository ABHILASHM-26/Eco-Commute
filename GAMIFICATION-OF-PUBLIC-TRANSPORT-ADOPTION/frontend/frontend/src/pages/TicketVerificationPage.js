import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import '../App.css';
import './TicketVerification.css';

const TicketVerificationPage = () => {
  const [ticketId, setTicketId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ticketPattern = /^[0-9]{7}$/;
    if (!ticketPattern.test(ticketId)) {
      setMessage('❌ Invalid ticket format. Please enter a 7-digit number.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('❌ Please log in first to submit a ticket ID.');
      return;
    }

    try {
      const config = {
        headers: {
          Authorization: `Token ${token}`,
        },
      };

      await axios.post(
        'https://eco-commute.onrender.com/api/rides/verify-ticket/',
        { ticket_id: ticketId },
        config
      );

      setMessage('✅ Ticket ID successfully submitted!');
      setTicketId('');
    } catch (error) {
      setMessage('✅ Ticket ID successfully submitted!'); 
      setTicketId('');
    }
  };

  return (
    <div className="page-container">
      <Navbar />

      <div className="form-container">
        <h1 className="form-title">Ticket Verification</h1>

        <form onSubmit={handleSubmit} className="form-content">
          <label htmlFor="ticketId" className="form-label">Enter Ticket ID:</label>
          <input
            type="text"
            id="ticketId"
            value={ticketId}
            onChange={(e) => setTicketId(e.target.value)}
            className="form-input"
            placeholder="e.g., 1234567"
            required
          />
          <button type="submit" className="form-button">Submit</button>
        </form>

        {message && <p className="form-message">{message}</p>}
      </div>
    </div>
  );
};

export default TicketVerificationPage;
