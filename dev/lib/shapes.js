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

class Triangle extends shapes {
  render() {
    const { color } = this;
    return (`<polygon points="100,100 150,25 150,75 200,0" fill="${color}" />`);
  }
}
class Square extends shapes {
  render() {
    const { color } = this;
    return (`<rect x="100" y="100" width="100" height="100" fill="${color}" />`);
  }
}
class Circle extends shapes {
  render() {
    const { color } = this;
    return (`<circle cx="150" cy="100" r="50" fill="${color}" />`);
  }
}

module.exports = { shapes, Triangle, Square, Circle };