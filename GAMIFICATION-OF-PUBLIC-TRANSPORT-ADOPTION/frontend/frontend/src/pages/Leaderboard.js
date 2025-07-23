import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios.get('/api/users/leaderboard/')
      .then(res => setLeaders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-black text-green-400 p-4 rounded-2xl shadow-lg w-full max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">🏆 Leaderboard</h2>
      <ol className="list-decimal ml-6 space-y-2">
        {leaders.map((user, index) => (
          <li key={index} className="flex justify-between">
            <span>{user.username}</span>
            <span>{user.points} pts</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
