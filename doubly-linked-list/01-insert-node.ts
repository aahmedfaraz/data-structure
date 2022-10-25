// import classes
import { DoublyLinkedList } from './utils/types';

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