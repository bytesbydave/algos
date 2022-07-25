const reverseLinkedList = require('./index');
const ListNode = require('./linkedlist');

test('reverseLinkedList is a function', () => {
  expect(typeof reverseLinkedList).toEqual('function');
});

describe('reverseLinked List returns the list in reverse', () => {
  test('when the list has 5 elements', () => {
    const linkedList = [5, 4, 3, 2, 1].reduce(
      (acc, val) => new ListNode(val, acc),
      null
    );
    const res = reverseLinkedList(linkedList);
    expect(res.val).toEqual(5)
  });
});
