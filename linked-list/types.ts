export class LinkedList {
    head: null | LinkedListNode;
    constructor() {
        this.head = null;
    }
}

export class LinkedListNode {
    data: number;
    next: null | LinkedListNode;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}