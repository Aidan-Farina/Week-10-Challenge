const fs = require('fs');
const inquirer = require('inquirer');

function generateLogo() {
    inquirer
      .prompt([
        {
          name: 'text',
          message: 'Enter up to three characters for the logo text:',
          validate: (input) => {
            if (input.length > 3) {
              return 'Please enter up to three characters.';
            }
            return true;
          },
        },
        {
          name: 'textColor',
          message: 'Enter the text color (keyword or hexadecimal number):',
        },
        {
          name: 'shape',
          message: 'Choose a shape for the logo (circle, triangle, or square):',
          validate: (input) => {
            const shapes = ['circle', 'triangle', 'square'];
            if (!shapes.includes(input.toLowerCase())) {
              return 'Please choose a valid shape.';
            }
            return true;
          },
        },
        {
          name: 'shapeColor',
          message: 'Enter the shape color (keyword or hexadecimal number):',
        },
      ])
    }