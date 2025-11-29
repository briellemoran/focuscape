import React, { useState, useEffect } from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

function Main() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-page">
      <h2>welcome to focuscape</h2>
      <p className="current-time">{currentTime}</p>
      <Link to="/customize" className="start-link">
        <button className="start-button">start studying</button>
      </Link>
    </div>
  );
}

export default Main;