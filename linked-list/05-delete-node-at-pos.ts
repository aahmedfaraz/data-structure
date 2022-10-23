// import classes and types
import { dummy_llist } from "./utils/mock";
import { LinkedListNode } from "./utils/types";

// Function : to delete node at any position
const delete_node_at_pos = (head: null | LinkedListNode, pos: number): null | LinkedListNode => {
    if (head === null || pos < 0) {
        return head;
    };
    if (pos === 0) {
        head = head?.next || null;
        return head;
    }
    let curr_node = head;
    let curr_position = 0;
    while (curr_position !== pos - 1 && curr_node.next) {
        curr_position++;
        curr_node = curr_node.next;
    };
    curr_node.next = curr_node.next?.next || null;
    return head;
};

// print initial value of llist
console.log("BEFORE MANIPULATIONS");
dummy_llist.print();

// delete nodes at random positions
console.log("AFTER MANIPULATIONS");
dummy_llist.head = delete_node_at_pos(dummy_llist.head, 2);
dummy_llist.print();

dummy_llist.head = delete_node_at_pos(dummy_llist.head, 3);
dummy_llist.print();

dummy_llist.head = delete_node_at_pos(dummy_llist.head, 0);
dummy_llist.print();

// testing : position = -1 (underflow)
dummy_llist.head = delete_node_at_pos(dummy_llist.head, -1);
dummy_llist.print();

// testing : position = 500 (overflow)
dummy_llist.head = delete_node_at_pos(dummy_llist.head, 500);
dummy_llist.print();

// OUTPUT
// BEFORE MANIPULATIONS
// {"data":1,"next":{"data":2,"next":{"data":3,"next":{"data":4,"next":{"data":5,"next":null}}}}}
// AFTER MANIPULATIONS
// {"data":1,"next":{"data":2,"next":{"data":4,"next":{"data":5,"next":null}}}}
// {"data":1,"next":{"data":2,"next":{"data":4,"next":null}}}
// {"data":2,"next":{"data":4,"next":null}}
// {"data":2,"next":{"data":4,"next":null}}
// {"data":2,"next":{"data":4,"next":null}}