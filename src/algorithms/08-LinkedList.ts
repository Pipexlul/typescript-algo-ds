import { SimpleLogger } from "../utils/logger";

interface IListNode<T> {
  val: T;
  next: IListNode<T> | null;
}

interface IDoublyListNode<T> {
  val: T;
  prev: IDoublyListNode<T> | null;
  next: IDoublyListNode<T> | null;
}

class DoublyListNode<T> implements IDoublyListNode<T> {
  constructor(
    public val: T,
    public prev: IDoublyListNode<T> | null = null,
    public next: IDoublyListNode<T> | null = null
  ) {}
}

interface IDoublyLinkedList<T> {
  head: IDoublyListNode<T> | null;

  at: (idx: number) => T | null;
  find: (callback: (item: T, index: number) => boolean) => T | null;

  insert: (elem: T, idx: number) => void;
  prepend: (elem: T) => void;
  append: (elem: T) => void;

  remove: (idx: number) => T | null;
  shift: () => T | null;
  pop: () => T | null;
}

const logger = new SimpleLogger("LINKED LIST");

class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
  public head: IDoublyListNode<T> | null;
  // TODO: FG: Add tail functionality to optimize operations on last node

  constructor(initialValue?: T) {
    if (initialValue) {
      const newNode = new DoublyListNode(initialValue);

      this.head = newNode;
    } else {
      this.head = null;
    }
  }

  at(idx: number): T | null {
    if (this.head === null) {
      return null;
    }

    let cur: IDoublyListNode<T> | null = this.head;

    let curIteration = 0;
    while (cur !== null) {
      if (curIteration === idx) {
        return cur.val;
      }

      ++curIteration;
      cur = cur.next;
    }

    return null;
  }

  find(callback: (item: T, index: number) => boolean): T | null {
    let cur = this.head;

    if (this.head === null) {
      return null;
    }

    let curIteration = 0;
    while (cur !== null) {
      if (callback(cur.val, curIteration)) {
        return cur.val;
      }

      ++curIteration;
      cur = cur.next;
    }

    return null;
  }

  insert(elem: T, idx = -1): void {
    let cur = this.head;
    let lastNode: typeof this.head = null;

    if (this.head === null) {
      const headNode = new DoublyListNode(elem);

      this.head = headNode;

      return;
    }

    let curIteration = 0;

    while (cur !== null) {
      if (curIteration === idx) {
        const newNode = new DoublyListNode(elem);
        newNode.prev = cur.prev;
        newNode.next = cur;

        cur.prev = newNode;

        if (idx === 0) {
          this.head = newNode;
        }

        return;
      }

      ++curIteration;

      if (cur.next === null) {
        lastNode = cur;
      }

      cur = cur.next;
    }

    if (idx === -1 && lastNode) {
      const newNode = new DoublyListNode(elem);

      newNode.prev = lastNode;
      lastNode.next = newNode;
    }

    return;
  }

  prepend(elem: T): void {
    this.insert(elem, 0);
  }

  append(elem: T): void {
    this.insert(elem);
  }

  remove(idx = -1): T | null {
    let cur = this.head;
    let lastNode: typeof this.head = null;

    if (cur === null) {
      return null;
    }

    let curIteration = 0;

    while (cur !== null) {
      if (curIteration === idx) {
        const removedElem = cur.val;

        const prev = cur.prev;
        const next = cur.next;

        if (prev) {
          prev.next = next;
        }

        if (next) {
          next.prev = prev;
        }

        if (idx === 0) {
          this.head = next;
        }

        return removedElem;
      }

      ++curIteration;

      if (cur.next === null) {
        lastNode = cur;
      }

      cur = cur.next;
    }

    if (idx === -1 && lastNode) {
      const removedElem = lastNode.val;

      if (lastNode.prev) {
        lastNode.prev.next = null;
      }

      return removedElem;
    }

    return null;
  }

  shift(): T | null {
    return this.remove(0);
  }

  pop(): T | null {
    return this.remove();
  }
}

const testList = new DoublyLinkedList<number>(55);
testList.append(5);
testList.append(15);
testList.append(25);
testList.prepend(-5);
testList.prepend(-10);
logger.log("Removed Start: ", testList.shift());
logger.log("Removed End: ", testList.pop());
testList.append(100);
logger.log("val at index 0: ", testList.at(0));
logger.log("val at index 10: ", testList.at(10));
logger.log("val at index 1: ", testList.at(1));
logger.log("Removed index 1: ", testList.remove(1));
logger.log("val at index 1: ", testList.at(1));
logger.log("find element with value 15");
const findVal = testList.find((val, idx) => val === 15);
logger.log(findVal);
logger.log("find element with value 850152");
const findVal2 = testList.find((val, idx) => val === 850152);
logger.log(findVal2);

logger.log();

export { DoublyLinkedList };
