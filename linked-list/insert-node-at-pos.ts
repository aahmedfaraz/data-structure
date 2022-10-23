// import classes
import { LinkedList, LinkedListNode } from "./types";

// Function: to insert node at any position
export const insert_node_at_pos = (head: null | LinkedListNode, position: number, data: number): LinkedListNode => {
    if (head === null) {
        head = new LinkedListNode(data);
        return head;
    }
    let curr_node = head;
    let prev_node = null;
    let curr_position = 0;
    while (curr_position !== position) {
        curr_position++;
        prev_node = curr_node;
        curr_node = curr_node.next!;
    }
    const new_node = new LinkedListNode(data);
    if (prev_node) {
        prev_node.next = new_node;
    } else {
        head = new_node;
    }
    new_node.next = curr_node;
    return head;
}

// creating new llist
const my_linked_list = new LinkedList();

// inserting nodes at any position and printing llist
my_linked_list.head = insert_node_at_pos(my_linked_list.head, 0, 10);
console.log(JSON.stringify(my_linked_list.head));

my_linked_list.head = insert_node_at_pos(my_linked_list.head, 0, 15);
console.log(JSON.stringify(my_linked_list.head));

my_linked_list.head = insert_node_at_pos(my_linked_list.head, 1, 20);
console.log(JSON.stringify(my_linked_list.head));

my_linked_list.head = insert_node_at_pos(my_linked_list.head, 2, 30);
console.log(JSON.stringify(my_linked_list.head));

my_linked_list.head = insert_node_at_pos(my_linked_list.head, 3, 40);
console.log(JSON.stringify(my_linked_list.head));

my_linked_list.head = insert_node_at_pos(my_linked_list.head, 1, 50);
console.log(JSON.stringify(my_linked_list.head));

my_linked_list.head = insert_node_at_pos(my_linked_list.head, 1, 60);
console.log(JSON.stringify(my_linked_list.head));

// testing: position = 1000
my_linked_list.head = insert_node_at_pos(my_linked_list.head, 1000, 70);
console.log(JSON.stringify(my_linked_list.head));

// testing: position = -1000
my_linked_list.head = insert_node_at_pos(my_linked_list.head, -1000, 70);
console.log(JSON.stringify(my_linked_list.head));

// OUTPUT
// {"data":10,"next":null}
// {"data":15,"next":{"data":10,"next":null}}
// {"data":15,"next":{"data":20,"next":{"data":10,"next":null}}}
// {"data":15,"next":{"data":20,"next":{"data":30,"next":{"data":10,"next":null}}}}
// {"data":15,"next":{"data":20,"next":{"data":30,"next":{"data":40,"next":{"data":10,"next":null}}}}}
// {"data":15,"next":{"data":50,"next":{"data":20,"next":{"data":30,"next":{"data":40,"next":{"data":10,"next":null}}}}}}
// {"data":15,"next":{"data":60,"next":{"data":50,"next":{"data":20,"next":{"data":30,"next":{"data":40,"next":{"data":10,"next":null}}}}}}}