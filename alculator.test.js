const { add, subtract, multiply, divide } = require('./calculator');

test('adds two numbers', () => {
  expect(add(5, 3)).toBe(8);
});

test('subtracts two numbers', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiplies two numbers', () => {
  expect(multiply(5, 3)).toBe(15);
});

test('divides two numbers', () => {
  expect(divide(6, 3)).toBe(2);
});

test('throws error when dividing by zero', () => {
  expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});
