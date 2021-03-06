# React Pomodoro

## Description

A simple web app pomodoro timer made using React.

## Purpose

The purpose of this project is for me to recreate a project that I have made from another framework. I want to be able to understand different ways to implement code, as well as exercise good coding practices.

This project was also a way for me to put my coding thought process into words with the hopes of sharing with others. See the journals folder of this repository to find my thoughts on building this project.

## Links

Live code here: https://averdin2.github.io/React_Pomodoro/

Here is a link to the code of the Vue version of this project: https://github.com/averdin2/pomodoro_web_app

I also posted notes on my thought process as I build that project for the first time so feel free to check out the project blog folder from that repository.

## Project Functional Requirements per Component:

### Pomodoro Timer Component:

- The overall Pomodoro Timer will consist of two separate timers with different intervals that count down to 0 by 1 second.
- The first timer will be set at 25 minutes. This timer will act as the work period in the Pomodoro process.
- The second timer will be set at 5 minutes. This timer will act as a timer for a break in the Pomodoro process.
- When the 25 minute timer reaches 0, the Pomodoro Timer will prompt the user to start the break timer set at 5 minutes.
- When the 5 minute break timer reaches 0, the Pomodoro Timer will prompt the user to start the overall Pomodoro timer starting at 25 minutes.
- Once the Pomodoro Timer is started, it cannot be paused.
- The Pomodoro Timer can be reset at any time by pressing a button marked “Reset”.

### Button Component:

- A start button will prompt the users to start the Pomodoro Timer when the timer has yet to be started.
- A start button will prompt the users to start the Pomodoro Timer when the timer has stopped.
- A reset button will prompt the users to reset the Pomodoro Timer when the timer has been started.
- A reset button will prompt the users to reset the Pomodoro Timer when the timer has stopped.
- Upon pressing the start button, the Pomodoro Timer will begin to count down and the start button will disappear.
- Upon pressing the restart button, the Pomodoro Timer will reset the Pomodoro Timer to its original state and the reset button will disappear.

### Background Component:

- The background component will be blue when the timer is not stopped.
- When the Pomodoro Timer is in the stopped state, the background component will change to a red color.

### Title Component:

- The Title will show the text, “Pomodoro Timer,” to indicate that the web app is a pomodoro timer.
