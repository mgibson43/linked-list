'use strict'

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    // Create new node
    const node = new Node(value);

    // Initialize variable to store current node
    let current;

    // If list is empty, add node to head
    // If list is not empty, iterate to end of list
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      // Iterates to end of list
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    // Increments list size
    this.length++;
  }

  // Returns size of list
  size() {
    return this.length;
  }

  // Returns head of list
  head() {
    return this.head;
  }

  tail() {
    let current = this.head;

    // Iterate to end of list
    while (current.next) {
      current = current.next;
    }

    // Returns last item in list
    return current;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();
list.append('cat');
list.append('dog');
list.append('horse');
console.log(list.size());
