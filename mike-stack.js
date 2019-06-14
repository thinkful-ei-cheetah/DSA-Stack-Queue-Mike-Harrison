class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    // if the stack is empty, then the node will be on top
    // of the stack
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    // if the stack has something then create a new node,
    // add data to the new node and point the pointer to the top
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    // to remove the top of the stack, point the pointer to the
    // next item and that item becomes the top of the stack
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

