import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState('');
  const [isRunning, setIsRunning] = useState(true);
  const [halfTime, setHalfTime] = useState(false);
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (seconds === 45 * 60) {
      setMessage('1. yarı bitti');
      setIsRunning(false);
      setHalfTime(true);
      setBreakTime(15 * 60); // 15 dakika ara
    } else if (seconds === 90 * 60) {
      setMessage('Maç sona erdi');
      setIsRunning(false);
    } else if (!halfTime) {
      setMessage('');
    }
  }, [seconds]);

  useEffect(() => {
    let breakTimer;
    if (halfTime && breakTime > 0) {
      breakTimer = setInterval(() => {
        setBreakTime((prevBreakTime) => prevBreakTime - 1);
      }, 1000);
    } else if (breakTime === 0 && halfTime) {
      setMessage('2. yarı başladı');
      setHalfTime(false);
      setIsRunning(true);
    }

    return () => clearInterval(breakTimer);
  }, [halfTime, breakTime]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`;
  };

  return (
    <div>
      <div>{formatTime(seconds)}</div>
      {halfTime && (
        <div>2. yarıya {formatTime(breakTime)} sonra başlanacaktır</div>
      )}
      <div>{message}</div>
    </div>
  );
};

export default Timer;
