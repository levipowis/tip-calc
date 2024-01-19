# Tip Calculator

Calculates tips based on a given bill amount and selected tip percentage.

**Link to demo:** https://tip-calculator-yhym.onrender.com/

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

I wanted to get back to basics and build something in vanilla HTML, CSS, and JavaScript. I planned the layout via pen and paper and then wrote a list of the following requirements:

1. It should have a text input for the bill amount
2. It should have a radio button group to select the tip percentage
3. It should have a "Calulate Tip" button
4. It should have a "Total Tip" output div
5. It should have a "Total Amount" output div
6. It should have an event listener to run calculations and return data to output divs when button is clicked

I then followed that list and build everything pretty much in that order.

## Lessons Learned:

In every project I come across little problems I need to solve and this is how I learn. I can read documentation all day, but I learn by solving a problem in the midst of a project. The following is a list of the problems I solved along the way of coding this app:

- How to access the value of a checked radio button in JavaScript via .querySelector method
- Needed to convert strings to floats so I could multiply the billAmount by the tipPercentage. Used parseFloat() to accomplish this.
- I wanted the output of tipAmount and totalAmount to render as currency so I learned how to use the Intl.NumberFormat constructor.
- I refreshed my knowledge on how to style using vanilla CSS. I've been using and learning Bootstrap for the past few months.
- Learned to style the radio buttons by looking at multiple examples and then building my own CSS. After this I wanted to line up my percentage labels with the radio buttons and figured this out using display: inline-block

Overall I had a blast building this project! It was fun to sit down and build something from scratch and learn along the way.
