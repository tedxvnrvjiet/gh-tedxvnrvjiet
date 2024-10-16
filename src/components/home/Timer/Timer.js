import React, { useState, useEffect } from 'react';
import './Timer.css'; // Import the external CSS file for styling

function Timer() {
  const calculateTimeLeft = () => {
    const eventDate = new Date("October 28, 2024 00:00:00"); // Set your event date here
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div className="time-box" key={interval}>
        <div className="time-value">{timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}</div>
        <div className="time-label">{interval}</div>
      </div>
    );
  });

  return (
    <div className="timer-container">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}

export default Timer;
