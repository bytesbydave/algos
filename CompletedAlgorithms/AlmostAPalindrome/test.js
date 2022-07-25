const almostAPalindrome = require('./index.js');

test('function exists', () => {
  expect(typeof almostAPalindrome).toEqual('function');
});

test('"race a car" should return true', () => {
  const str = 'race a car';
  expect(almostAPalindrome(str)).toEqual(true);
});

test('"abccdba" should return true', () => {
  const str = 'abccdba';
  expect(almostAPalindrome(str)).toEqual(true);
});

test('"abcdefdba" should return false', () => {
  const str = 'abcdefdba';
  expect(almostAPalindrome(str)).toEqual(false);
});

test('"aba" should return true', () => {
  const str = 'aba';
  expect(almostAPalindrome(str)).toEqual(true);
});

test('"" should return true', () => {
  const str = '';
  expect(almostAPalindrome(str)).toEqual(true);
});

test('"a" should return true', () => {
  const str = 'a';
  expect(almostAPalindrome(str)).toEqual(true);
});

test('"ab" should return true', () => {
  const str = 'ab';
  expect(almostAPalindrome(str)).toEqual(true);
});

test('"A man, a plan, a canal,: Panamax" should return true', () => {
  const str = 'A man, a plan, a canal: Panamax';
  expect(almostAPalindrome(str)).toEqual(true);
});