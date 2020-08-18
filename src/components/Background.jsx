import React from 'react';
import Title from './Title';
import PomodoroTimer from './PomodoroTimer';
import Button from './Button';

import '../styles/styles.css';

export default function Background() {
  return (
    <div className="container">
      <Title title="Pomodoro Timer" />
      <PomodoroTimer time="25:00" />
      <Button name="Start" />
    </div>
  );
}
