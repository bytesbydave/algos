const mostWater = require('./index.js');

test('mostWater function exists', () => {
  expect(typeof mostWater).toEqual('function');
});

test('returns 28 if provided with [7,1,2,3,9]', () => {
  const arr = [7, 1, 2, 3, 9];
  expect(mostWater(arr)).toEqual(28);
});

test('returns 0 if provided with []', () => {
  const arr = [];
  expect(mostWater(arr)).toEqual(0);
});

test('returns 0 if provided with [7]', () => {
  const arr = [7];
  expect(mostWater(arr)).toEqual(0);
});

test('returns 72 if provided with [6,9,3,4,5,8]', () => {
  const arr = [6, 9, 3, 4, 5, 8];
  expect(mostWater(arr)).toEqual(32);
});
