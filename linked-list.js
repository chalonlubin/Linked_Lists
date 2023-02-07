/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length <= 0) throw new Error("Empty LL");
    if (this.length === 1) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return val;
    }
    let start = this.head;
    let toRemove = start.next;
    while (toRemove.next !== null) {
      start = start.next;
    }
    start.next = null;
    this.tail = start;
    this.length--;
    return toRemove.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length <= 0) throw new Error("Empty LL");
    if (this.length === 1) {
      let remove = this.head.val
      this.head = null, this.tail = null, this.length--;
      return remove;
    }
    let temp = this.head.val;
    this.head = this.head.next;
    this.length--;
    return temp;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx > this.length - 1 || idx < 0)
      throw new Error("invalid idx");
    let count = 0;
    let cur = this.head;

    while (count < idx) {
      cur = cur.next;
      count++;
    }
    return cur.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length - 1 || idx < this.length - this.length)
      throw new Error("invalid idx");
    let cur = this.head;
    let count = 0;
    while (count < idx) {
      cur = cur.next;
      count++;
    }
    cur.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let node = new Node(val);
    if (idx > this.length - 1 || idx < this.length - this.length)
      throw new Error("invalid idx");
    let cur = this.head;
    let count = 0;
    while (count < idx) {
      cur = cur.next;
      count++;
    }
    node.next = cur.next;
    cur = node;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length - 1 || idx < this.length - this.length)
      throw new Error("invalid idx");
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let cur = this.head;
    let after = cur.next.next;
    let count = 0;
    while (count < idx) {
      cur = cur.next;
      count++;
    }
    let returnVal = cur.next;
    cur.next = after;
    this.length--;
    return returnVal;
  }

  /** average(): return an average of all values in the list */

  average() {}
}

module.exports = LinkedList;
