// Class for DoublyLinkedList
class DoublyLinkedList {
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
class DoublyLinkedListNode {
    data: number;
    next: null | DoublyLinkedListNode;
    prev: null | DoublyLinkedListNode;
    constructor(data: number) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// create a doubly llist
const my_doubly_llist = new DoublyLinkedList();

// insert elements inside the list
my_doubly_llist.insert_node(0);
my_doubly_llist.print_list();

my_doubly_llist.insert_node(1);
my_doubly_llist.print_list();

my_doubly_llist.insert_node(2);
my_doubly_llist.print_list();

my_doubly_llist.insert_node(3);
my_doubly_llist.print_list();

my_doubly_llist.insert_node(4);
my_doubly_llist.print_list();

// OUTPUT
// THE DOUBLY LLIST
// -> 0

// THE DOUBLY LLIST
// -> 0
// -> 1

// THE DOUBLY LLIST
// -> 0
// -> 1
// -> 2

// THE DOUBLY LLIST
// -> 0
// -> 1
// -> 2
// -> 3

// THE DOUBLY LLIST
// -> 0
// -> 1
// -> 2
// -> 3
// -> 4