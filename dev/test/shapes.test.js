const { Triangle } = require('../lib/shapes');

describe('Triangle', () => {
  test('render method should generate correct SVG representation', () => {
    // Arrange
    const color = '';
    const triangleInstance = new Triangle(color);

    // Act
    const svgRepresentation = triangleInstance.render();

    // Assert
    expect(svgRepresentation).toEqual(`<polygon points="100,100 150,25 150,75 200,0" fill="${color}" />`);
  });
});




// describe('Square', () => {
//   test('test for a square with a background', () => {
//     const square = new Square(); // Use Square instead of shapes.Square
//     expect(square.render()).toEqual('<rect x="100" y="100" width="100" height="100" fill="${square.color}" />');
//   });
// });

// describe('Circle', () => {
//   test('test for a circle with a background', () => {
//     const circle = new Circle(); // Use Circle instead of shapes.Circle
//     expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="${circle.color}" />');
//   });
// });