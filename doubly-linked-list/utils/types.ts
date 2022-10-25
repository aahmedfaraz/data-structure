// Class for DoublyLinkedList
export class DoublyLinkedList {
    head: null | DoublyLinkedListNode;
    tail: null | DoublyLinkedListNode;
    constructor() {
        this.head = null
        this.tail = null
    }

    // insert node
    insert_node = (data: number) => {
        let new_node = new DoublyLinkedListNode(data);
        if (this.head === null) {
            this.head = new_node;
        } else {
            this.tail!.next = new_node;
            new_node.prev = this.tail;
        };
        this.tail = new_node;
    }

    // print llist
    print_list = () => {
        let curr_node = this.head
        console.log('THE DOUBLY LLIST')
        while (curr_node) {
            console.log('->', curr_node.data);
            curr_node = curr_node.next
        }
        console.log();
    }
}

// Class for DoublyLinkedListNode
export class DoublyLinkedListNode {
    data: number;
    next: null | DoublyLinkedListNode;
    prev: null | DoublyLinkedListNode;
    constructor(data: number) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}