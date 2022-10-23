// import classes and types
import { dummy_llist } from "./utils/mock";
import { LinkedListNode } from "./utils/types";

// Function : to get node value from any position
const get_node_value = (head: null | LinkedListNode, pos: number): null | number => {
    if (head === null || pos < 0) {
        return null;
    };
    let curr_node = head;
    let curr_position = 0;
    while (curr_position !== pos && curr_node) {
        curr_position++;
        curr_node = curr_node.next!;
    };
    return curr_node?.data || null;
};

// print initial value of llist
console.log("INITIAL LLIST");
dummy_llist.print();

// get nodes data from random positions
console.log("GETTING DATA");
console.log(`Data at index (0) is: `, get_node_value(dummy_llist.head, 0));
console.log(`Data at index (3) is: `, get_node_value(dummy_llist.head, 3));
console.log(`Data at index (4) is: `, get_node_value(dummy_llist.head, 4));
// testing : position = -1 (underflow)
console.log(`Data at index (-1) is: `, get_node_value(dummy_llist.head, -1));
// testing : position = 500 (overflow)
console.log(`Data at index (500) is: `, get_node_value(dummy_llist.head, 500));

// OUTPUT
// INITIAL LLIST
// {"data":1,"next":{"data":2,"next":{"data":3,"next":{"data":4,"next":{"data":5,"next":null}}}}}
// GETTING DATA
// Data at index (0) is:  1
// Data at index (3) is:  4
// Data at index (4) is:  5
// Data at index (-1) is:  null
// Data at index (500) is:  null