import React, { useEffect, useState } from 'react';
import { fetchStats } from '../services/api';

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStats()
      .then((data) => setStats(data))
      .catch((error) => setError('Could not fetch stats.'));
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      {stats ? (
        <div>
          <h2>Dashboard</h2>
          <p>Total Rides: {stats.total_rides}</p>
          <p>Carbon Saved: {stats.carbon_saved} kg</p>
          <p>Points Earned: {stats.points_earned}</p>
        </div>
      ) : (
        <p>Loading stats...</p>
      )}
    </div>
  );
}

export default Dashboard;
