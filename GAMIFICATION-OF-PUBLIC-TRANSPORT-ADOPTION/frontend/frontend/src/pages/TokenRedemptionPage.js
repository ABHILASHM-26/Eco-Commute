import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css'; // Ensure global styles are applied
import './TokenRedemption.css'; // Import specific Token Redemption page styles

function TokenRedemptionPage() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="form-container" style={{ width: '100%', maxWidth: '500px' }}>
        <div>
          <h2>Brand Stores Yet to be Collaborated</h2>
          <p>We are working on collaborating with brand stores for token redemption. Stay tuned!</p>
        </div>
      </div>
    </div>
  );
}

export default TokenRedemptionPage;
