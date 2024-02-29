// inquirer prompt for user input
const inquirer = require('inquirer');

// fs to write to file
const fs = require('fs');

// require the classes from the lib folder
const shapes = require('./lib/shapes');

// this function will write the svg string to a file.
function writefile(filename, answer) {

  // this is the svg string that will be written to the file, setting the width and height of the svg, by default will generate a image with a width of 300 and a height of 200.
  let svgString =
  '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">';
  svgString += '<g transform="translate(20,70)">';

  // this will take the shape that the user chose and generate the svg string for it.
  svgString += `${answer.shape}`;

  // this shapeChoice variable will be used to generate the text for the svg.
  let shapeChoice;
  // if the user choose the triangle shape, it will generate the svg string for the triangle.
  if (answer.shape === 'Triangle') {

  // this will generate the svg string for the triangle, color and textcolor will be passed to the constructor function in the Triangle class.
    shapeChoice = new shapes.Triangle();
    svgString += `<polygon points="0,200 150,0 300,200" fill="${answer.color}" />`;
    svgString += `<text x="150" y="95" text-anchor="middle" font-size="40" fill="${answer.textcolor}">${answer.filename}</text>`;
  } 

  // if the user choose the square shape, it will generate the svg string for the square.
  else if (answer.shape === 'Square') {

  // this will generate the svg string for the square, color and textcolor will be passed to the constructor function in the Square class.
    shapeChoice = new shapes.Square();  
    svgString += `<rect x="80" y="30" width="140" height="140"  fill="${answer.color}" />`;
    svgString += `<text x="150" y="95" text-anchor="middle" font-size="40" fill="${answer.textcolor}">${answer.filename}</text>`;
  }
  // if the user choose the circle shape, it will generate the svg string for the circle.
   else if (answer.shape === 'Circle') {

  // this will generate the svg string for the circle, color and textcolor will be passed to the constructor function in the Circle class.
    shapeChoice = new shapes.Circle();  
    svgString += `<circle cx="142" cy="20" r="70"" fill="${answer.color}" />`;
    svgString += `<text x="140" y="35" text-anchor="middle" font-size="40" fill="${answer.textcolor}">${answer.filename}</text>`;
  }


  // Closing </g> tag
  svgString += "</g>";

  // Closing </svg> tag
  svgString += "</svg>";

  // this will write the svg string to a file.
  fs.writeFile(filename, svgString, (err) => {
  // conditional statement to check if there is an error writing the file.
    if (err) {
      console.error('Error writing file:', err);
  // if there is no error, it will log the message to the console.
    } else {
      console.log(`Generated logo.svg`);
    }
  });
}

// this is a function to prompt the user for input where we are asking for the shape, color, text color, and filename.
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

// this function will take the answer from the promptUser function and pass it to the writefile function.
  .then(answer => {
    // conditional statement to check if the filename is more than 3 characters.
    if (answer.filename.length > 6) {
    // if the filename is more than 6 characters, it will call the promptUser function again.
      console.log('Please enter a valid filename');
      promptUser();
    // if the filename acomplishs 6 characters, it will call the writefile function.
    } else {
      writefile("logo.svg", answer);
    }
  });
}

// this will call the promptUser function.
promptUser();
