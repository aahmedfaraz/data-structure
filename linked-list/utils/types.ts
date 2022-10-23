export class LinkedList {
    head: null | LinkedListNode;
    constructor() {
        this.head = null;
    }
    // insert node at the end of the list
    insert_node = (data: number) => {
        if (this.head === null) {
            this.head = new LinkedListNode(data);
            return;
        }
        let curr_node = this.head;
        while (curr_node.next) {
            curr_node = curr_node.next;
        };
        curr_node.next = new LinkedListNode(data);
    }

    // print list
    print = () => {
        console.log(JSON.stringify(this.head));
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