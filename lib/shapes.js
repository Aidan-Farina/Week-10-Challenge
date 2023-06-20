const fs = require('fs');
const inquirer = require('inquirer');

function generateLogo() {
    inquirer
      .prompt([
        {
            // this is the input text you want in the logo
          name: 'text',
          message: 'Enter up to three characters for the logo text:',
          validate: (input) => {
            if (input.length > 3) {
              return 'Please enter up to three characters.';
            }
            return true;
          },
        },
        // this is gonna ask what color you want the text to be
        {
          name: 'textColor',
          message: 'Enter the text color (keyword or hexadecimal number):',
        },
        // this is gonna ask what shape you want the text to be
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
        // this is gonna ask you what color you want the shape to be
        {
          name: 'shapeColor',
          message: 'Enter the shape color (keyword or hexadecimal number):',
        },
      ])
      // this will then take the answers from above.
      .then((answers) => {
        const { text, textColor, shape, shapeColor } = answers;
  
        // this string is what creates the svg
        const svgString = `
          <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <${shape} fill="${shapeColor}" width="100%" height="100%"></${shape}>
            <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="${textColor}">
              ${text}
            </text>
          </svg>
        `;
  
        // thi is how the svg is saved
        fs.writeFile('logo.svg', svgString, (err) => {
          if (err) throw err;
          console.log('Generated logo.svg');
        });
      });
  }
  // this will allow for the generate logo function to be used elsewhere 
  module.exports = { generateLogo };