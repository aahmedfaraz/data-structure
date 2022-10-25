// import classes
import { DoublyLinkedList, DoublyLinkedListNode } from './utils/types';

// Function - to get Node data
const get_node = (head: null | DoublyLinkedListNode, position: number): null | number => {
    if (head === null || position < 0) {
        return null;
    }
    let curr_node: DoublyLinkedListNode = head;
    let curr_position = 0;
    while (position !== curr_position && curr_node) {
        curr_position++;
        curr_node = curr_node.next!
    }
    return curr_node ? curr_node.data : null
}

// create a doubly llist
const my_doubly_llist = new DoublyLinkedList();

// insert elements inside the list
my_doubly_llist.insert_node(10);
my_doubly_llist.insert_node(100);
my_doubly_llist.insert_node(200);
my_doubly_llist.insert_node(300);
my_doubly_llist.insert_node(400);
my_doubly_llist.insert_node(500);

// print list
my_doubly_llist.print_list();

// get nodes
console.log('Node Data at location [0] = ', get_node(my_doubly_llist.head, 0));
console.log('Node Data at location [2] = ', get_node(my_doubly_llist.head, 2));
console.log('Node Data at location [5] = ', get_node(my_doubly_llist.head, 5));
console.log('Node Data at location [-100] = ', get_node(my_doubly_llist.head, -100)); // testing underflow
console.log('Node Data at location [100] = ', get_node(my_doubly_llist.head, 100)); // testing overflow

// OUTPUT
// THE DOUBLY LLIST
// -> 10
// -> 100
// -> 200
// -> 300
// -> 400
// -> 500

// Node Data at location [0] =  10
// Node Data at location [2] =  200
// Node Data at location [5] =  500
// Node Data at location [-100] =  null
// Node Data at location [100] =  null