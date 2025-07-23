// src/api/rideBookingApi.js

import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export const bookRide = async (pickupLocation, dropLocation, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };

    const response = await axios.post(
      `${BASE_URL}/api/rides/book/`,
      {
        pickup_location: pickupLocation,
        drop_location: dropLocation,
      },
      config
    );

    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Something went wrong.' };
  }
};
