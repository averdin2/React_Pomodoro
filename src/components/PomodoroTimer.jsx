import React, { useState, useEffect } from 'react';

import '../styles/colorStyles.css';

function PomodoroTimer(props) {
  // Variables used to display minutes and seconds
  const [displayMinutes, setMinutes] = useState(0);
  const [displaySeconds, setSeconds] = useState(0);

  // Method that computes given time value from minutes to seconds
  // let timeInSeconds = (time) => {
  //   return time * 60;
  // };

  // Method to calculate minutes and seconds for a passed time and set state values for timer
  let displayTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    setMinutes(minutes < 10 ? '0' + minutes : minutes);
    setSeconds(seconds < 10 ? '0' + seconds : seconds);
  };

  useEffect(() => {
    // Initialize starting display time
    displayTime(props.time);
    // Set time to be counted down when timer starts
    let time = props.time;
    let interval = null;
    // When props.start is changed by the parent component, start the interval and thus the timer
    if (props.start) {
      interval = setInterval(() => {
        time = time - 1;
        displayTime(time);
        // When the timer passes 0, stop the timer and clear it. Change status to stopped.
        if (time <= 0) {
          clearInterval(interval);
          // To make sure timer doesn't count negative
          //displayTime(0);
          props.handleTimerStatus(3);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [props]);

  return (
    <div className={props.class}>
      <h1>
        {displayMinutes}:{displaySeconds}
      </h1>
    </div>
  );
}

export default PomodoroTimer;
