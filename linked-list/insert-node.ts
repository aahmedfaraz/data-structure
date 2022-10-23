// Import LinkedList classes
import { LinkedList, LinkedListNode } from "./types";

// Function: to insert node inside a linked list
const insert_node = (head: null | LinkedListNode, data: number) => {
    if (head === null) {
        head = new LinkedListNode(data);
        return head;
    }
    let curr_head = head;
    while (curr_head.next) {
        curr_head = curr_head.next;
    };
    curr_head.next = new LinkedListNode(data);
    return head;
}

// Creating a linked list
const my_linked_list = new LinkedList();

// Inserting elements and printing
my_linked_list.head = insert_node(my_linked_list.head, 0);
console.log(JSON.stringify(my_linked_list.head));

my_linked_list.head = insert_node(my_linked_list.head, 10);
console.log(JSON.stringify(my_linked_list.head));

my_linked_list.head = insert_node(my_linked_list.head, 2);
console.log(JSON.stringify(my_linked_list.head));

my_linked_list.head = insert_node(my_linked_list.head, 30);
console.log(JSON.stringify(my_linked_list.head));

my_linked_list.head = insert_node(my_linked_list.head, 4);
console.log(JSON.stringify(my_linked_list.head));

// OUTPUT
// {"data":0,"next":null}
// {"data":0,"next":{"data":10,"next":null}}
// {"data":0,"next":{"data":10,"next":{"data":2,"next":null}}}
// {"data":0,"next":{"data":10,"next":{"data":2,"next":{"data":30,"next":null}}}}
// {"data":0,"next":{"data":10,"next":{"data":2,"next":{"data":30,"next":{"data":4,"next":null}}}}}