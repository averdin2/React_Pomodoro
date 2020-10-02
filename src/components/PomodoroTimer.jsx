import React, { useState, useEffect } from 'react';

import '../styles/colorStyles.css';

function PomodoroTimer(props) {
  // Variables used to display minutes and seconds
  const [displayMinutes, setMinutes] = useState(0);
  const [displaySeconds, setSeconds] = useState(0);

  const [reset, setReset] = useState(false);

  // Method that computes given time value from minutes to seconds
  let timeInSeconds = (time) => {
    return time * 60;
  };

  // Method to calculate minutes and seconds for a passed time and set state values for timer
  let displayTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    setMinutes(minutes < 10 ? '0' + minutes : minutes);
    setSeconds(seconds < 10 ? '0' + seconds : seconds);
  };

  useEffect(() => {
    // Initialize starting display time
    displayTime(timeInSeconds(props.time)); // Needed so that time doesn't just start without knowing how much time was set

    // Method that counts down based on a given time passed in
    let timer = (time) => {
      let timeLeft = timeInSeconds(time);

      const interval = setInterval(() => {
        timeLeft = timeLeft - 1;

        if (reset === true) {
          console.log('Hello');
          clearInterval(interval);
          return;
        }

        if (timeLeft < 0) {
          props.handleTimerStatus(3);
          clearInterval(interval);
          return;
        }

        displayTime(timeLeft);
      }, 1000);
    };

    if (props.isReset === true) {
      setReset(true);
    }

    // Starts timer when start is true.
    // Handle start then toggles start to false to avoid creating a new timer
    if (props.start === true) {
      timer(props.time);
      props.handleStart();
    }
  }, [props, reset]);

  return (
    <div className={props.class}>
      <h1>
        {displayMinutes}:{displaySeconds}
      </h1>
    </div>
  );
}

export default PomodoroTimer;
