const { Triangle, Circle, Square } = require('./shapes');
//these function are testing the render methods to see if those shapes are woking correctly
// in this example we set our expected results and put though an example shape then compared it to the expected
test('Triangle render method', () => {
  const triangle = new Triangle('red');
  const expected = '<polygon points="150,10 280,190 20,190" fill="red" />';
  expect(triangle.render()).toBe(expected);
});

test('Circle render method', () => {
  const circle = new Circle('blue');
  const expected = '<circle cx="150" cy="100" r="80" fill="blue" />';
  expect(circle.render()).toBe(expected);
});

test('Square render method', () => {
  const square = new Square('green');
  const expected = '<rect x="20" y="20" width="260" height="160" fill="green" />';
  expect(square.render()).toBe(expected);
});