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
    // Initialize variables
    let count = 0;
    let current = this.listHead;

    // Iterate through list until designated index is reached
    while (count < this.length) {
      // return node at designated index
      if (count === index) {
        return current;
      } else {
        count++;
        current = current.next;
      }
    }

    // Returns if index is out of bounds
    return 'Index out of bounds';
  }

  pop() {
    // Initialize variables
    let previous;
    let current = this.listHead;

    // Iterate to end of list
    while (current.next) {
      previous = current;
      current = current.next;
    }

    // Make next node of second to last item null
    // Decrement length and return popped node
    previous.next = null;
    this.length--;
    return current;
  }

  contains(value) {
    // Initialize variables
    let current = this.listHead;
    let count = 0;

    // Iterate through list, return true if match is found
    while (count < this.length) {
      if (current.value == value) {
        return true;
      } else {
        count++;
        current = current.next;
      }
    }

    // Return false if match is not found
    return false;
  }

  find(value) {
    // Initializes variables
    let current = this.listHead;
    let count = 0;

    // Iterates through list, if match is found, return count
    while (count < this.length) {
      if (current.value == value) {
        return count;
      } else {
        current = current.next;
        count++;
      }
    }

    // If no match is found, return "Value not found"
    return 'Value not found';
  }

  toString() {
    // Initialize variables and set head value as first item in string
    let current = this.listHead;
    let listString = `( ${current.value} )`;

    // Iterate though list, adding value of each node to string
    while (current.next) {
      listString = `${listString} -> ( ${current.next.value} )`;
      current = current.next;
    }

    // Add null to tail of string and return string
    listString = `${listString} -> null`;
    return listString;
  }

  // Method to take a value and index and place a node with the value into the given index
  insertAt(value, index) {

    // Initialize variables
    const node = new Node(value);
    let count = 0;
    let previous;
    let current = this.listHead;

    // Find index and insert value
    while (current.next) {
      if (count === index) {
        break;
      } else {
        console.log(count);
        count++;
        previous = current;
        current = current.next;
      }
    }

    // If given index is greater than list size - 1, append value to end of list
    if (current.next == null) {
      current.next = node;
    } else {
      previous.next = node;
      previous = previous.next;
      previous.next = current;
    }

    // Increment list
    this.length++;
  }

  // Method to take an index and remove the node at the given index
  removeAt(index) {

    // Initialize variables
    let count = 0;
    let current = this.listHead;
    let previous;

    // Iterate through list until match for index is found
    // If match is found, remove node at index
    while (current.next) {
      if (count === index) {
        previous.next = null;
        previous.next = current.next;
        this.length--;
        break;
      } else {
        count++;
        previous = current;
        current = current.next;
      }
    }
  }
}

// Node class containing value of node and link to next node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
