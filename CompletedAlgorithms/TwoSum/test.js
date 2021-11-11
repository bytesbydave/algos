const twoSum = require('./index.js');

test('twoSum function exists', () => {
  expect(typeof twoSum).toEqual('function');
});

test('returns [3,4] when provided with [1,3,7,9,2] and target 11', () => {
  const testArray = [1, 3, 7, 9, 2,5];
  const target = 11;
  expect(twoSum(testArray, target)).toEqual([3, 4]);
});
