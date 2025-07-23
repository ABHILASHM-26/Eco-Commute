import React from 'react';

function RideBooking() {
  return (
    <div>
      <h2>Ride Booking</h2>
      <form>
        <div>
          <label htmlFor="location">Select Location</label>
          <input type="text" id="location" placeholder="Enter your location" />
        </div>
        <button type="submit">Book Ride</button>
        <p>The application yet to be licensed with TGSRTC for RideBooking</p>
      </form>
    </div>
  );
}

export default RideBooking;
