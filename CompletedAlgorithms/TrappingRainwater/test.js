const trappingRainwater = require('./index.js');

test('trappingRainwater function exists', () => {
  expect(typeof trappingRainwater).toEqual('function');
});

test('expect [0,1,0,2,1,0,3,1,0,1,2] to return 8', () => {
  const arr = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
  expect(trappingRainwater(arr)).toEqual(8);
});

test('expect [] to return 0', () => {
  const arr = [];
  expect(trappingRainwater(arr)).toEqual(0);
});

test('expect [3] to return 0', () => {
  const arr = [3];
  expect(trappingRainwater(arr)).toEqual(0);
});

test('expect [3,4,3] to return 0', () => {
  const arr = [3, 4, 3];
  expect(trappingRainwater(arr)).toEqual(0);
});
