
import React from 'react';
import Navbar from '../components/Navbar';
import './HelpPage.css';

const HelpPage = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="help-content">
        <h1 className="page-title">Help & Guide</h1>

        <section>
          <h2>📲 Login</h2>
          <p>Enter your email and password to log into your account.</p>
        </section>

        <section>
          <h2>🚌 Ride Booking</h2>
          <p>Book available TGSRTC rides by selecting a source, destination.</p>
        </section>

        <section>
          <h2>🏅 Badges</h2>
          <p>Earn badges based on your ride kilometers, carbon saved, and tokens earned.</p>
        </section>

        <section>
          <h2>📊 Leaderboard</h2>
          <p>Check top travelers and your CO2 savings compared to others.</p>
        </section>

        <section>
          <h2>🎁 Token Redemption</h2>
          <p>Use your tokens at partnered stores. Coming soon!</p>
        </section>

        <section>
          <h2>🎫 Ticket Verification</h2>
          <p>Enter ticket IDs for ride validation and confirmation.</p>
        </section>

        <section>
          <h2>👤 Profile</h2>
          <p>View your email, and your Username.</p>
        </section>

        <button className="top-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ⬆ Back to Top
        </button>

        <div className="contact-support">
          <h3>Contact Support</h3>
          <a
            href="mailto:abhilashm13344@gmail.com"
            className="help-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            📧 Email Support
          </a>
          <a href="tel:+919014578545" className="help-link">📞 Call Support</a>
          <a
            href="https://wa.me/919014578545"
            target="_blank"
            rel="noopener noreferrer"
            className="help-link"
          >
            💬 WhatsApp Support
          </a>
          <a
            href="https://www.linkedin.com/in/abhilashmellacheruvu/"
            target="_blank"
            rel="noopener noreferrer"
            className="help-link"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/ABHILASHM-26"
            target="_blank"
            rel="noopener noreferrer"
            className="help-link"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
