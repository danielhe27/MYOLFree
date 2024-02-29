// constructor function (color, textcolor, name, shape, size)
class shapes {
  constructor() {
    this.color = '';
    this.textcolor = '';
    this.name = '';
    this.shape = '';
    this.size = '';
    console.log('Shape constructor called');
  }
}

// this functions generate a new class called triangle extended from the class shapes.
class Triangle extends shapes {
// this render function will return the svg string for the triangle.
  render() {
    const { color } = this;
    return (`<polygon points="100,100 150,25 150,75 200,0" fill="${color}" />`);
  }
}

// this functions generate a new class called square extended from the class shapes.
class Square extends shapes {
// this render function will return the svg string for the square.
  render() {
    const { color } = this;
    return (`<rect x="100" y="100" width="100" height="100" fill="${color}" />`);
  }
}

// this functions generate a new class called circle extended from the class shapes.
class Circle extends shapes {
// this render function will return the svg string for the circle.
  render() {
    const { color } = this;
    return (`<circle cx="150" cy="100" r="50" fill="${color}" />`);
  }
}
// this will export the classes Triangle, Square, Circle to be used in index.js and in the test files.
module.exports = { shapes, Triangle, Square, Circle };