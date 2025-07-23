import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate('/')}
      style={{
        position: 'fixed',
        top: '30px',
        right: '70px',
        padding: '10px 20px',
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 1000,
      }}
    >
      Home
    </button>
  );
};

export default HomeButton;
