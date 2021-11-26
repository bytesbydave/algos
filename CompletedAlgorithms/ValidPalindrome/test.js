const validPalindrome = require('./index.js');

test('validPalindrome function exists', () => {
  expect(typeof validPalindrome).toEqual('function');
});

test('"aabaa" returns true', () => {
  const str = 'aabaa';
  expect(validPalindrome(str)).toEqual(true);
});

test('"aabbaa" returns true', () => {
  const str = 'aabbaa';
  expect(validPalindrome(str)).toEqual(true);
});

test('"abc" returns true', () => {
  const str = 'abc';
  expect(validPalindrome(str)).toEqual(false);
});

test('"a" returns true', () => {
  const str = 'a';
  expect(validPalindrome(str)).toEqual(true);
});

test('"" returns true', () => {
  const str = '';
  expect(validPalindrome(str)).toEqual(true);
});

test('"A man, a plan, a canal: Panama" returns true', () => {
  const str = 'A man, a plan, a canal: Panama';
  expect(validPalindrome(str)).toEqual(true);
});
