import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import RideBookingPage from './pages/RideBookingPage';
import BadgesPage from './pages/BadgePage';
import CarbonEmissionsPage from './pages/CarbonEmissionsPage';
import Dashboard from './components/Dashboard'; // If you have a Dashboard
import HomeButton from './components/HomeButton';
import LoginPage from './pages/LoginPage';
import TokenRedemptionPage from './pages/TokenRedemptionPage';
import TicketVerificationPage from './pages/TicketVerificationPage';
import ProfilePage from './pages/ProfilePage'
import HelpPage from './pages/HelpPage';
import MenuButton from './components/MenuButton';
function App() {
  
  return (
    <Router>
        {/* Show HomeButton always */}
        <HomeButton/>
      <MenuButton /> {/* new */}
      <Routes>
        <Route path="/login" element={<LoginPage />} /> {'http://localhost:8000/api/users/login/'}
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/ride-booking" element={<RideBookingPage />} />
        <Route path="/badges" element={<BadgesPage />} />
        <Route path="/carbon-emissions" element={<CarbonEmissionsPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/token-redemption" element={<TokenRedemptionPage />} />
        <Route path="/ticket-verification" element={<TicketVerificationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
