const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');
// the prompt user function will ask for user input for things such text, text color, which shape you want, and the color of that shape
function promptUser() {
    return inquirer.prompt([
        {
            name: 'text',
            message: 'Enter up to three characters:',
            validate: (input) => input.length <= 3,
        },
        {
            name: 'textColor',
            message: 'Enter the text color:',
        },
        {
            name: 'shape',
            type: 'list',
            message: 'Select a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            name: 'shapeColor',
            message: 'Enter the shape color:',
        },
    ]);
}
// the generate logo function will take user input and use those umputs to generate the svg file
function generateLogo() {
    promptUser()
        .then(({ text, textColor, shape, shapeColor }) => {
            let shapeObj;

            switch (shape) {
                case 'circle':
                    shapeObj = new Circle(shapeColor);
                    break;
                case 'triangle':
                    shapeObj = new Triangle(shapeColor);
                    break;
                case 'square':
                    shapeObj = new Square(shapeColor);
                    break;
            }
            const svgContent = `
        <svg width="300" height="200">
            ${shapeObj.render()}
            <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>
        </svg>
    `;
            // this is making the svg file and putting it in the exanples folder
            fs.writeFile('examples/logo.svg', svgContent, (err) => {
                if (err) {
                    //if and error occured this is what will be displayed
                    console.error('Error writing file:', err);
                    //if everything is right it will display this message
                } else {
                    console.log('Generated logo.svg');
                }
            });
        })
        .catch((err) => {
            console.error('Error:', err);
        });
}

generateLogo()