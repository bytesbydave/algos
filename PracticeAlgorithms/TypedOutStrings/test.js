const typedOutStrings = require('./index.js');

test('typedOutStrings function exists', () => {
  expect(typeof typedOutStrings).toEqual('function');
});

test('ab#z and az#z should return true', () => {});

test('abc#d and acc#c should return false', () => {});

test('x#y#z# and a# should return true', () => {});

test('a###b and b should return false', () => {});

test('Ab#z and ab#z should return false', () => {
  expect(typedOutStrings(string1, string2)).toEqual(false);
});
