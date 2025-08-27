// 5: Simple Linked List

class Element {
  constructor(data, nextElement = null) {
    this.data = data;
    this.nextElement = nextElement;
  }

  datum() {
    return this.data;
  }

  isTail() {
    return this.nextElement === null;
  }

  next() {
    return this.nextElement;
  }
}

class SimpleLinkedList {
  constructor() {
    this.headElement = null;
  }

  size() {
    let curElement = this.head();
    let length = 0;
    while (curElement !== null) {
      curElement = curElement.next();
      length++;
    }
    return length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(datum) {
    let element = new Element(datum, this.head());
    this.headElement = element;
  }

  peek() {
    let curElement = this.head();
    return curElement ? curElement.datum() : null;
  }

  head() {
    return this.headElement;
  }

  pop() {
    let curElement = this.head();
    this.headElement = this.headElement.next();
    return curElement.datum();
  }

  static fromArray(arr) {
    let linkedList = new SimpleLinkedList();
    if (arr === null) return linkedList;

    let reversedArr = arr.slice().reverse();
    reversedArr.forEach((datum) => linkedList.push(datum));
    return linkedList;
  }

  toArray() {
    let array = [];
    let curElement = this.head();
    while (curElement !== null) {
      array.push(curElement.datum());
      curElement = curElement.next();
    }
    return array;
  }

  reverse() {
    let list = new SimpleLinkedList();

    let currentElem = this.head();
    while (currentElem !== null) {
      list.push(currentElem.datum());
      currentElem = currentElem.next();
    }

    return list;
  }
}

module.exports = { SimpleLinkedList, Element };
