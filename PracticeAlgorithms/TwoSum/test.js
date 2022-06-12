const twoSum = require('./index.js');

test('twoSum function exists', () => {
  expect(typeof twoSum).toEqual('function');
});

test('returns [3,4] when provided with [1,3,7,9,2] and target 11', () => {
  const testArray = [1, 3, 7, 9, 2, 5];
  const target = 11;
  expect(twoSum(testArray, target)).toEqual([3, 4]);
});

test('returns [2,3] when provided with [1,3,7,0,2] and target 7', () => {
  const testArray = [1, 3, 7, 0, 2, 5];
  const target = 7;
  expect(twoSum(testArray, target)).toEqual([2, 3]);
});

test('returns [0,1] when provided with [4,3,7,0,2] and target 7', () => {
  const testArray = [4, 3, 7, 0, 2];
  const target = 7;
  expect(twoSum(testArray, target)).toEqual([0, 1]);
});
