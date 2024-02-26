const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');


// {/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

// <circle cx="150" cy="100" r="80" fill="green" />

// <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg> */}


function writefile(filename, answer) {
  let svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svgString += "<g>";
  svgString += `${answer.shape}`;

  let shapeChoice;
  if (answer.shape === 'new Triangle') {
    shapeChoice = new shapes.triangle();
    svgString += `<polygon points="100,100 150,25 150,75 200,0"  fill="${triangle.color}" />`;
  } else if (answer.shape === 'Square') {
    shapeChoice = new shapes.Square();  // Assuming Square is part of shapes module
    svgString += `<rect x="100" y="100" width="100" height="100" fill="${shapeChoice.color}" />`;
  } else if (answer.shape === 'Circle') {
    shapeChoice = new shapes.Circle();  // Assuming Circle is part of shapes module
    svgString += `<circle cx="150" cy="100" r="50" fill="${shapeChoice.color}" />`;
  }

  svgString += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text fill="${shapeChoice.textcolor}" />`;

  svgString += '</g>';
  svgString += '</svg>';

  fs.writeFile(filename, svgString, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('Your logo .Svg file was created successfully!');
    }
  });
}

function promptUser() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like to make?',
      choices: ['Triangle', 'Square', 'Circle'],
    },
    {
      type: 'input',
      name: 'color',
      message: 'What color would you like your shape to be?',
    },
    {
      type: 'input',
      name: 'textcolor',
      message: 'What color would you like your text to be, please type a hex value or a color name',
    },
    {
      type: 'input',
      name: 'filename',
      message: 'What would you like to display as the filename?',
    },
  ])
  .then(answer => {
    if (answer.filename.length > 3) {
      console.log('Please enter a valid filename');
      promptUser();
    } else {
      writefile("logo.svg", answer);
    }
  });
}

promptUser();
