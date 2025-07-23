import React from 'react';
import '../App.css'; // Ensure this includes the base/global styles

const CarbonEmissions = () => {
  return (
    <div className="leaderboard-page">
      <h2 className="page-title">Leader Board</h2>
      <p className="leaderboard-note">🏆 Top riders of the city leading EcoCommute list</p>

      <div className="leaderboard-list">
        <p className="leaderboard-entry">🥇 Nandha Gopal - <span className="token-count">216 Tokens</span></p>
        <p className="leaderboard-entry">🥈 Anand - <span className="token-count">120 Tokens</span></p>
        <p className="leaderboard-entry">🥉 Pardhu - <span className="token-count">77 Tokens</span></p>
        <p className="leaderboard-entry">🎖️ Srinidhi - <span className="token-count">30 Tokens</span></p>
      </div><br></br>
      <div className="leaderboard-list">
      </div>
    </div>
  );
};

export default CarbonEmissions;
