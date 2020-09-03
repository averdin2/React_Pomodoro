import React from 'react';

import '../styles/colorStyles.css';

function PomodoroTimer(props) {
  return (
    <div className={props.class}>
      <h1>{props.time}</h1>
    </div>
  );
}

export default PomodoroTimer;
