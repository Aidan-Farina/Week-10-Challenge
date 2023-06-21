// shape is the parent class so taht Triangle, Circle, and Square will have similar functionality
class Shape {
  //this color constructor will take in a color and assing it to the color property
  constructor(color) {
    this.color = color;
  }

  render() {
    throw new Error('render() method must be implemented in the child class.');
  }
}
// all of these classes are just takign the color and assigning it to the shape.
class Triangle extends Shape {
  render() {
    return `<polygon points="150,10 280,190 20,190" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="20" y="20" width="260" height="160" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };