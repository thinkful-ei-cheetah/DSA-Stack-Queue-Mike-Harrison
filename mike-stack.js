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
// 1. Star Trek
function main() {
  let starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  // console.log(peek(starTrek));

  starTrek.pop(); // remove Scotty
  starTrek.pop(); // remove McCoy
  starTrek.push('Scotty'); // add Scotty
  // console.log(display(starTrek));
}
// console.log(main());

// 2. Useful methods
function peek(stack) {
  // check to see if the stack has any data
  if (stack.top === null) {
    return null;
  }
  // return the top data (last)
  return stack.top.data;
}

function isEmpty(stack) {
  if (stack.top === null) {
    return 'stack is empty';
  }
}

function display(stack) {
  // JSON.stringify(value, replacer, space)
  return JSON.stringify(stack, null, 3);
}

// 3. Palindromes
function is_palindrome(s) {
  // sets everything to lower case and removes symbols and spaces
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your code goes here
  const newStack = new Stack();
  let reverseString = '';
  // inserts the data in order
  for (let i = 0; i < s.length; i++) {
    newStack.push(s[i]);
  }
  // takes the data out inorder from the back (top)
  while (newStack.top !== null) {
    reverseString += newStack.pop();
  }
  return reverseString === s;
}
// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

// 4. Matching parentheses
function matchParens(str) {
  const testStack = new Stack();

  for (let i = 0; i < str.length; i++) {
    // if str has ( [ { , then push data
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      testStack.push(str[i]);
    }
  }
  // console.log(JSON.stringify(testStack, null, 3));

  let j = 0;
  while (j < str.length) {
    // if str has ) ] } , then pop data 
    if (str[j] === ')' || str[j] === ']' || str[j] === '}') {
      testStack.pop();
    }
    j++;
  }
  // console.log(JSON.stringify(testStack, null, 3));

  if (testStack.top === null) {
    return true;
  } else {
    return false;
  }
}

// console.log(matchParens('}])([{'));
// console.log(matchParens('([){]}'));
// console.log(matchParens('}])([')); // when it is false it breaks the code

// 5. Sort Stack
function sortStack(originalStack) {
  let newStack = new Stack();
  let currNode;

  newStack.push(originalStack.pop());
  // while the stack is not empty
  while (!isEmpty(originalStack)) {
    // pop the current node of this stack
    currNode = originalStack.pop();
    // if temporary stack is empty
    if (isEmpty(newStack)) {
      // push the current node into the temporary stack
      newStack.push(currNode);
    }
    // if the node in top of temporary stack is less than current 
    // node from  original stack, swap the current node and node in
    // temporary stack otherwise push current node to temporary stack
    if (peek(newStack) <= currNode) {
      originalStack.push(newStack.pop());
      newStack.push(currNode);
    } else {
      newStack.push(currNode);
    }
  }
  return newStack;
}

let poop = new Stack();
poop.push(1);
poop.push(9);
poop.push(2);
poop.push(5);
poop.push(7);

console.log(JSON.stringify(sortStack(poop), null, 3));