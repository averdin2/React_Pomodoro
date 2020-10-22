## React Pomodoro Journal Entry 1

When I set out to start working on this project in React, I knew that it was going to be different and that I had experience of building this application before (in Vue). My goal with restarting this project in React was to improve the code quality while also understanding the differences between the two frameworks.

Since I had done the project in Vue. I wanted to plan out the project as if I had not worked on it before. When I had worked on the project in Vue, a majority of the code needed for the application to work was in one file. I thought that this made the code very convoluted, so I sought to separate the responsibilities of different aspects when I implemented in React. The first thing I needed to consider was what I was building and what components I needed to build.

In order to answer the question of what components I needed to build, I decided to come up with a hypothetic project proposal. This is what I came up with: “Build a web application that acts as a simple Pomodoro Timer to visually alert me when the timer stops.” I then took some time to consider every aspect of this project proposal. I wanted to understand what it meant to “visually alert” and also what it meant by simple and web application. I came to the conclusion that visually alerting meant that the background would change color depending on whether or not the timer had yet to be started, was started, was stopped, and was on the break timer. The reason why I implemented the timer alert in this way was because I thought it would be interesting to have a very visual timer. A lot of timers may have sound or even both sound and visual to indicate completion, but I decided to just stick with visual.

I then tackled the task of deciding how many components I needed and what those components were. If you are unfamiliar with the concepts of components in React you can think about components like this: Suppose we have a really simple website. It probably has a header navigation bar, a section for the web page’s main content, a footer for additional website information, and maybe even some side content on the left or right of the main content to supplement the main page. We can think of each of these sections as components.

Let’s consider the nav bar that is at the top of many web pages. In the grand scheme of the website, we can think of this as one component of the website. Within a nav bar, we may have a menu for various links on the web page. We can also consider this menu as a component of the nav bar.

In React, Components is how we can structure our code. We break up similarly functioning code into separate components to be coded.

So, the components I ended up coming up with were a component for a Title, a component for the Timer itself, a component for a button to interact with the timer, and a Background component that would act as a way for the application to change colors depending on the timer’s status.

I then wrote out a list of functional requirements for each component which is located in the project’s ReadMe.

I want to note that there is a deliberate design choice that I made when writing these functional requirements. You may notice that I said that the timer cannot be paused when it is started. I made this design choice so that users of this web application cannot just pause the timer whenever they want. The point of a pomodoro timer is to have an uninterrupted period of work time. The break comes after you have finished that time. You are supposed to commit to the 25 minutes of work before taking a break. If you can pause in the middle of working, that defeats the whole purpose of a pomodoro timer. I also designed it so that you cannot pause during a break timer. This is deliberate so that your 5 minute break doesn’t turn into a 5 hour break.

In my next part of this journal, I will be discussing how I set up the project and the different changes I ended up making to my initial components.
