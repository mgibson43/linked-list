class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);
    if (head === null) {
      this.head = node;
    } else {
      
    }
    this.size++;
  }

  size() {
    return this.size;
  }

  head() {
    return this.head.value;
  }

  tail() {
    
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}