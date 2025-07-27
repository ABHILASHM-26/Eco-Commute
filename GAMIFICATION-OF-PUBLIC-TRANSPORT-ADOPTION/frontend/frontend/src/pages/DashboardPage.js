import React from 'react';
import Dashboard from '../components/Dashboard';
import Navbar from '../components/Navbar';
import '../App.css'; 

function DashboardPage() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="form-container" style={{ width: '100%', maxWidth: '800px' }}>
        <Dashboard />
      </div>
    </div>
  );
}

export default DashboardPage;
