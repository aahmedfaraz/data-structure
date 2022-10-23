// import dummy llist and types
import { dummy_llist } from "./utils/mock";
import { LinkedListNode } from "./utils/types";

// Function: to update node data at any position
const update_node_at_pos = (head: null | LinkedListNode, position: number, data: number): null | LinkedListNode => {
    if (head === null) {
        return head;
    };
    let curr_node = head;
    let curr_position = 0;
    while (curr_position !== position && curr_node) {
        curr_position++;
        curr_node = curr_node.next!;
    };
    if (curr_node !== null)
        curr_node.data = data;
    return head;
}

// printing llist before manipulation
console.log('BEFORE UPDATE');
dummy_llist.print();

// updating nodes inside llist
dummy_llist.head = update_node_at_pos(dummy_llist.head, 2, 100);
dummy_llist.head = update_node_at_pos(dummy_llist.head, 0, 50);
dummy_llist.head = update_node_at_pos(dummy_llist.head, 4, 200);
dummy_llist.head = update_node_at_pos(dummy_llist.head, -1, -50); // testing: position = -1 (underflow)
dummy_llist.head = update_node_at_pos(dummy_llist.head, 5, -200); // testing: position = 5 (overflow)

// printing llist after manipulation
console.log('AFTER UPDATE');
dummy_llist.print();

// OUTPUT
// BEFORE UPDATE
// {"data":1,"next":{"data":2,"next":{"data":3,"next":{"data":4,"next":{"data":5,"next":null}}}}}
// AFTER UPDATE
// {"data":50,"next":{"data":2,"next":{"data":100,"next":{"data":4,"next":{"data":200,"next":null}}}}}