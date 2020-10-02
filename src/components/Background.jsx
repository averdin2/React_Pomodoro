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
  const [isReset, setReset] = useState(false);

  const [shouldStart, setShouldStart] = useState(false);

  // Value variable to be passed to Button as props
  const [statusValue, setStatusValue] = useState(1);
  const [buttonText, setButtonText] = useState('Start');

  // To be passed down to PomodoroTimer
  const [timerStart, setTimerStart] = useState(false);

  let handleStart = () => {
    setTimerStart(false);
  };

  // Function to change state variables based on status of timer
  let handleTimerStatus = (status) => {
    switch (status) {
      // Reset / Not Started
      case 0:
        setStarted(false);
        setBreak(false);
        setStopped(false);
        setReset(true);
        setStatusValue(1);
        setShouldStart(false);
        setButtonText('Start');
        break;
      // Timer Started
      case 1:
        setStarted(true);
        setBreak(false);
        setStopped(false);
        setReset(false);
        setStatusValue(0);
        setTimerStart(true);
        setButtonText('Reset');
        break;
      // Break Timer Started
      case 2:
        setStarted(false);
        setBreak(true);
        setStopped(false);
        setReset(false);
        setStatusValue(0);
        setTimerStart(true);
        setButtonText('Reset');

        break;
      // Timer Stopped
      case 3:
        setStarted(false);
        setBreak(false);
        setStopped(true);
        if (shouldStart === true) {
          setStatusValue(1);
          setShouldStart(!shouldStart);
          setButtonText('Start');
        } else {
          setStatusValue(2);
          setShouldStart(!shouldStart);
          setButtonText('Break');
        }
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
        time={0.1}
        start={timerStart}
        handleStart={handleStart}
        handleTimerStatus={handleTimerStatus}
        isReset={isReset}
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
