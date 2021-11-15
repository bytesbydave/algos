const typedOutStrings = require('./index.js');

test('typedOutStrings function exists', () => {
  expect(typeof typedOutStrings).toEqual('function');
});

test('ab#z and az#z should return true', () => {
  const str1 = 'ab#z';
  const str2 = 'az#z';
  expect(typedOutStrings(str1, str2)).toEqual(true);
});

test('abc#d and acc#c should return false', () => {
  const str1 = 'abc#d';
  const str2 = 'acc#c';
  expect(typedOutStrings(str1, str2)).toEqual(false);
});

test('x#y#z# and a# should return true', () => {
  const str1 = 'x#y#z#';
  const str2 = 'a#';
  expect(typedOutStrings(str1, str2)).toEqual(true);
});

test('a###b and b should return true', () => {
  const str1 = 'a###b';
  const str2 = 'b';
  expect(typedOutStrings(str1, str2)).toEqual(true);
});

test('Ab#z and ab#z should return false', () => {
  const str1 = 'Ab#z';
  const str2 = 'ab#z';
  expect(typedOutStrings(str1, str2)).toEqual(false);
});
