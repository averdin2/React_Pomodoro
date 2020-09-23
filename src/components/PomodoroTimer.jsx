import React, { useState, useEffect } from 'react';

import '../styles/colorStyles.css';

function PomodoroTimer(props) {
  // State variables for minutes and seconds
  const [displayMinutes, setMinutes] = useState(0);
  const [displaySeconds, setSeconds] = useState(0);

  const [start, setStart] = useState(true);

  // Method that computes given time value from minutes to seconds
  let timeInSeconds = (time) => {
    return time * 60;
  };

  // Method to calculate minutes and seconds for a passed time and set state values for timer
  let displayTime = (t) => {
    const minutes = Math.floor(t / 60);
    const seconds = t % 60;

    setMinutes(minutes < 10 ? '0' + minutes : minutes);
    setSeconds(seconds < 10 ? '0' + seconds : seconds);
  };

  useEffect(() => {
    // Initialize starting display time
    displayTime(timeInSeconds(25)); // 25 should be time value passed in through props
    // Method that counts down based on a given time passed in
    let timer = (time) => {
      let timeLeft = timeInSeconds(time);

      const interval = setInterval(() => {
        timeLeft = timeLeft - 1;

        if (timeLeft < 0) {
          setStart(false);
          clearInterval(interval);
          return;
        }

        displayTime(timeLeft);
      }, 1000);
    };
    if (start === true) {
      timer(1);
      setStart(false);
    }
  }, [start]);

  return (
    <div className={props.class}>
      <h1>
        {displayMinutes}:{displaySeconds}
      </h1>
    </div>
  );
}

export default PomodoroTimer;
