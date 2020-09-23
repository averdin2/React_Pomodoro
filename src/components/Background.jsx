import React, { useState } from 'react';
import Title from './Title';
import PomodoroTimer from './PomodoroTimer';
import Button from './Button';

import '../styles/styles.css';
import '../styles/colorStyles.css';

export default function Background() {
  // const [status, setStatus] = useState(0);

  // State variables to determine color styles
  const [isStarted, setStarted] = useState(false);
  const [isBreak, setBreak] = useState(false);
  const [isStopped, setStopped] = useState(false);

  // Function to change state variables based on status of timer
  let handleTimerStatus = (status) => {
    switch (status) {
      // Reset / Not Started
      case 0:
        setStarted(false);
        setBreak(false);
        setStopped(false);
        break;
      // Timer Started
      case 1:
        setStarted(true);
        setBreak(false);
        setStopped(false);
        break;
      // Break Timer Started
      case 2:
        setStarted(false);
        setBreak(true);
        setStopped(false);
        break;
      // Timer Stopped
      case 3:
        setStarted(false);
        setBreak(false);
        setStopped(true);
        break;
      default:
        break;
    }
  };

  // let changeTimerStatus = (value) => {
  //   setStatus(value);
  //   handleTimerStatus(value);
  // };

  return (
    <div
      className={`container 
      ${isStarted ? 'blue-bg' : ''}
      ${isBreak ? 'green-bg' : ''}
      ${isStopped ? 'red-bg' : ''}`}
    >
      <Title
        class={`
        ${isStarted ? 'blue' : ''}
        ${isBreak ? 'green' : ''}
        ${isStopped ? 'red' : ''}`}
        title="Pomodoro Timer"
      />
      <PomodoroTimer
        class={`
        ${isStarted ? 'blue' : ''}
        ${isBreak ? 'green' : ''}
        ${isStopped ? 'red' : ''}`}
        time="25:00"
      />
      <Button
        class={`
        ${isStarted ? 'blue' : ''}
        ${isBreak ? 'green' : ''}
        ${isStopped ? 'red' : ''}`}
        name="Start"
        handleTimerStatus={handleTimerStatus}
        val={1}
      />
    </div>
  );
}
