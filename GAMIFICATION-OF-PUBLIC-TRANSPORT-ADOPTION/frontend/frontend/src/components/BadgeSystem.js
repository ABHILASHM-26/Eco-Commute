import React from 'react';
import '../App.css'; 

const BadgesPage = () => {
  return (
    <div className="badges-page">
      <h1 className="page-title">Badges</h1>

      {}
      <p className="badge-description">
        Congratulations Nandha Gopal on your achievements! 🌟 Earn more badges by riding and saving the environment!
      </p>

      {}
      <div className="badges-container">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5a9592c9cc8fed6981ecd0d7/5cd8e55b-edba-4fda-a391-104e9f375d0d/Warrior_Full.png"
          alt="Green Warrior"
          className="badge-image"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIc-Xc6SVJWLN1J10tIRmANISsxivF2rhJag&s"
          alt="Green Man"
          className="badge-image"
        />
      </div>

      {}
    </div>
  );
};

export default BadgesPage;
