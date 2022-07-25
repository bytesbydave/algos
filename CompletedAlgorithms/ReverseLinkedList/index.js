// Given a Linked List, return it in reverse

// Step 1: Verify the constraints
// What do we return if we get null or a single node?

// Just return null and the node back respectively

// Step 2: Write out test cases

// function reverseNode(head) {
//   let currentNode = head;
//   while (currentNode) {
//     // performOperation
//     currentNode = currentNode.next;
//   }
// }

const reverseLinkedList = (head) => {
  let prev = null;
  let current = head

  while (current) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }

  return prev;
};

// Time is O(N)
// Space is O(1)
module.exports = reverseLinkedList;
