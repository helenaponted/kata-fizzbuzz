
const fizzBuzz = require('./Fizzbuzz.js');

test('1', () => {
  expect(fizzBuzz(1)).toBe(1);
});
test('2', () => {
    expect(fizzBuzz(2)).toBe(2);
  });
  test('3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
  test('4', () => {
    expect(fizzBuzz(4)).toBe(4);
  });
  test('5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
  test('15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
 