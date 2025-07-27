
import React, { useState } from 'react';
import Navbar from './Navbar'; 
import './MenuButton.css'; 

function MenuButton() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <div className="menu-top-bar">
        <button className="menu-button" onClick={toggleNavbar}>⋮</button>
      </div>
      <Navbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
    </>
  );
}

export default MenuButton;
