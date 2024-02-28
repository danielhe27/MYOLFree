const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');



function writefile(filename, answer) {
  let svgString =
    '<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">';
  svgString += "<g>";
  svgString += `${answer.shape}`;

  let shapeChoice;
  if (answer.shape === 'Triangle') {
    shapeChoice = new shapes.Triangle();
    svgString += `<polygon points="0,200 150,0 300,200" fill="${answer.color}" />`;
  } 
  else if (answer.shape === 'Square') {
    shapeChoice = new shapes.Square();  // Assuming Square is part of shapes module
    svgString += `<rect x="150" y="100" width="200" height="200"  fill="${answer.color}" />`;
  }
   else if (answer.shape === 'Circle') {
    shapeChoice = new shapes.Circle();  // Assuming Circle is part of shapes module
    svgString += `<circle cx="150" cy="100" r="100" fill="${answer.color}" />`;
  }

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answer.textcolor}">${answer.filename}</text>`;

  // Closing </g> tag
  svgString += "</g>";

  // Closing </svg> tag
  svgString += "</svg>";

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
      message: 'What color would you like your shape to be, please type a hex value or a color name',
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
    if (answer.filename.length > 6) {
      console.log('Please enter a valid filename');
      promptUser();
    } else {
      writefile("logo.svg", answer);
    }
  });
}

promptUser();
