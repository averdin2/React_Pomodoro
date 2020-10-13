import React, { useState } from 'react';
import Title from './Title';
import PomodoroTimer from './PomodoroTimer';
import Button from './Button';

import '../styles/styles.css';
import '../styles/colorStyles.css';

export default function Background() {
  // State variables to determine color styles
  const [isStarted, setStarted] = useState(false);
  const [isBreak, setBreak] = useState(false);
  const [isStopped, setStopped] = useState(false);

  // Value to determine timer status and used by handleTimerStatus method
  const [statusValue, setStatusValue] = useState(1);

  // Variable to determine when timer should start work timer or break timer
  const [shouldStart, setShouldStart] = useState(false);

  // To be passed down to PomodoroTimer
  const [timerStart, setTimerStart] = useState(false);
  const [time, setTime] = useState(1500);

  // Text to be passed to button for button text as props
  const [buttonText, setButtonText] = useState('Start');

  // Function to change state variables based on status of timer
  let handleTimerStatus = (status) => {
    switch (status) {
      // Reset / Not Started
      case 0:
        setStarted(false);
        setBreak(false);
        setStopped(false);
        setStatusValue(1);
        setShouldStart(false);
        setTimerStart(false);
        setTime(1500);
        setButtonText('Start');
        break;
      // Timer Started
      case 1:
        setStarted(true);
        setBreak(false);
        setStopped(false);
        setStatusValue(0);
        setShouldStart(false);
        setTimerStart(true);
        setTime(1500);
        setButtonText('Reset');
        break;
      // Break Timer Started
      case 2:
        setStarted(false);
        setBreak(true);
        setStopped(false);
        setStatusValue(0);
        setShouldStart(true);
        setTimerStart(true);
        setTime(300);
        setButtonText('Reset');
        break;
      // Timer Stopped
      case 3:
        setStarted(false);
        setBreak(false);
        setStopped(true);
        setTime(0);
        if (shouldStart === true) {
          setStatusValue(1);
          setButtonText('Start');
        } else {
          setStatusValue(2);
          setButtonText('Break');
        }
        break;
      default:
        break;
    }
  };

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
        // Time given in seconds
        time={time}
        start={timerStart}
        handleTimerStatus={handleTimerStatus}
      />
      <Button
        class={`
        ${isStarted ? 'blue' : ''}
        ${isBreak ? 'green' : ''}
        ${isStopped ? 'red' : ''}`}
        name={buttonText}
        handleTimerStatus={handleTimerStatus}
        val={statusValue}
      />
    </div>
  );
}
