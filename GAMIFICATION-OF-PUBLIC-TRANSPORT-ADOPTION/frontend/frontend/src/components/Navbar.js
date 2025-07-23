// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // IMPORTANT: import css

function Navbar({ isOpen, toggleNavbar }) {
  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><Link to="/register" onClick={toggleNavbar}>Register</Link></li>
        <li><Link to="/login" onClick={toggleNavbar}>Login</Link></li>
        <li><Link to="/ride-booking" onClick={toggleNavbar}>Ride Booking</Link></li>
        <li><Link to="/badges" onClick={toggleNavbar}>Badges</Link></li>
        <li><Link to="/carbon-emissions" onClick={toggleNavbar}>Leader Board</Link></li>
        <li><Link to="/token-redemption" onClick={toggleNavbar}>Token Redemption</Link></li>
        <li><Link to="/ticket-verification" onClick={toggleNavbar}>Ticket Verification</Link></li>
        <li><Link to="/profile" onClick={toggleNavbar}>Profile</Link></li>
        <li><Link to="/help" onClick={toggleNavbar}>Help</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
