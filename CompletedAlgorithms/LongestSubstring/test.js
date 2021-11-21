const longestSubstring = require('./index.js');

test('longestSubstring function exists', () => {
  expect(typeof longestSubstring).toEqual('function');
});

test('abccabb should return 3', () => {
  const str = 'abccabb';
  expect(longestSubstring(str)).toEqual(3);
});

test('cccccc should return 1', () => {
  const str = 'cccccc';
  expect(longestSubstring(str)).toEqual(1);
});

test('empty string should return 0', () => {
  const str = '';
  expect(longestSubstring(str)).toEqual(0);
});

test('abcbda should return 4', () => {
  const str = 'abcbda';
  expect(longestSubstring(str)).toEqual(4);
});
