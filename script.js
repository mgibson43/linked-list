'use strict'

class LinkedList {
  constructor() {
    this.listHead = null;
    this.length = 0;
  }

  // Add node to end of list
  append(value) {
    // Create new node
    const node = new Node(value);

    // Initialize variable to store current node
    let current;

    // If list is empty, add node to head
    // If list is not empty, iterate to end of list
    if (this.listHead === null) {
      this.listHead = node;
    } else {
      current = this.listHead;

      // Iterates to end of list
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    // Increments list size
    this.length++;
  }

  // Add node to start of list
  prepend(value) {
    // Instantiate new node, if list is empty make node the head
    const node = new Node(value);
    if (this.listHead === null) {
      this.listHead = node;

      // If list is not empty, store list, make new node the head, place stored
      // list as next item in node head
    } else {
      let current = this.listHead;
      this.listHead = node;
      this.listHead.next = current;
    }

    // Increment size of list
    this.length++;
  }

  // Returns size of list
  size() {
    return this.length;
  }

  // Returns head of list
  head() {
    return this.listHead;
  }

  tail() {
    let current = this.listHead;

    // Iterate to end of list
    while (current.next) {
      current = current.next;
    }

    // Returns last item in list
    return current;
  }

  at(index) {
    let count = 0;
    let current = this.listHead;
    while (count <= index) {
      if (count === index) {
        return current;
      } else {
        count++;
        current = current.next;
      }
    } 
  }

  pop() {
    let previous;
    let current = this.listHead;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    
    previous.next = null;
    this.length--;
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
list.append('cow');
list.append('cat');
list.append('bunny');
list.prepend('bull');
console.log(list);
console.log(list.pop());
console.log(list.tail());
console.log(list);