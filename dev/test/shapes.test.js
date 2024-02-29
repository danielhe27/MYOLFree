// here we are calling the classes Triangle, Square, Circle from the shapes.js file.
const { Triangle } = require('../lib/shapes');
const { Square } = require('../lib/shapes'); 
const { Circle } = require('../lib/shapes');

// this is a test function to check if the Triangle class is working correctly in the index.js file.
describe('Triangle', () => {
  test('render method should generate correct SVG representation', () => {
    const color = '';

    const triangleInstance = new Triangle(color);

//  svgRepresentation is the svg string that is generated from the render function in the Triangle class.
    const svgRepresentation = triangleInstance.render();

// we expect the svgRepresentation to be equal to the expected SVG representation.
    expect(svgRepresentation).toEqual(`<polygon points="100,100 150,25 150,75 200,0" fill="${color}" />`);
  });
});

// this is a test function to check if the Square class is working correctly in the index.js file.
describe('Square', () => {
  test('render method should generate correct SVG representation', () => {

    const color = '';

    const squareInstance = new Square(color);
//  svgRepresentation is the svg string that is generated from the render function in the Square class.
    const svgRepresentation = squareInstance.render();
// we expect the svgRepresentation to be equal to the expected SVG representation.
    expect(svgRepresentation).toEqual(`<rect x="100" y="100" width="100" height="100" fill="${color}" />`);
  });
});

// this is a test function to check if the Circle class is working correctly in the index.js file.
describe('Circle', () => {
  test('render method should generate correct SVG representation', () => {

    const color = '';

    const circleInstance = new Circle(color);
//  svgRepresentation is the svg string that is generated from the render function in the Circle class.
    const svgRepresentation = circleInstance.render();
// we expect the svgRepresentation to be equal to the expected SVG representation.
    expect(svgRepresentation).toEqual(`<circle cx="150" cy="100" r="50" fill="${color}" />`);
  });
});
