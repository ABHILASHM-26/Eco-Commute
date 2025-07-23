import React, { useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../App.css'; // Import your existing styles
import './RideBookingPage.css';

const RideBookingPage = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [message, setMessage] = useState('');
  const [ticketId, setTicketId] = useState(null); // New state to store ride ID

  const handleBookRide = async () => {
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        setMessage('Please login first.');
        return;
      }

      const config = {
        headers: {
          Authorization: `Token ${token}`,
        },
      };

      const response = await axios.post(
        'http://localhost:8000/api/rides/book/',
        {
          pickup_location: pickupLocation,
          drop_location: dropLocation,
        },
        config
      );

      if (response.status === 201) {
        const rideId = response.data.id; // Get the ride ID from response
        setTicketId(rideId);
        setMessage(`🎉 Ride booked successfully! Your Ticket ID is ${rideId}`);
        setPickupLocation('');
        setDropLocation('');
      }
    } catch (error) {
      console.error('Booking error:', error.response?.data || error.message);
      const errorDetail = error.response?.data?.detail || 'Please try again.';
      setMessage(`❌ Ride booking failed.`);
      setTicketId(null); // Clear ticketId on failure
    }
  };

  return (
    <div className="ride-booking-page">
      <h1 className="page-title">Book Your Ride</h1>

      <div className="booking-form">
        <input
          type="text"
          placeholder="Pickup Location"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Drop Location"
          value={dropLocation}
          onChange={(e) => setDropLocation(e.target.value)}
          className="input-field"
        />
        <button 
          onClick={handleBookRide} 
          className="submit-button"
        >
          Book Ride
        </button>
      </div>

      {message && <p className={`message ${message.includes('failed') ? 'error' : 'success'}`}>{message}</p>}

      {/* Show Ticket ID separately if available */}
      {ticketId && (
        <div className="ticket-id">
          🎫 Your Ticket ID: {ticketId}
        </div>
      )}

      <div className="map-container">
        <p className="map-note">
          Welcome to the Ride Booking Page for Warangal City! <br />
          Note: This Application is yet to be licensed with TGSRTC for official ride booking.
        </p>

        <MapContainer
          center={[17.9784, 79.5941]} // Center at Warangal
          zoom={13}
          className="leaflet-map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default RideBookingPage;
