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

module.exports = { shapes, Triangle };