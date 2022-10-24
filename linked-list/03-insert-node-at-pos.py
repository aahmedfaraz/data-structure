# ==============================================================================================

# class: Linked List
class LinkedList:
    def __init__(self):
        self.head = None

    def print_list(self):
        print('The Linked List', end=" ")
        curr_node = self.head
        while(curr_node):
            print("->", curr_node.data, end="")
            curr_node = curr_node.next
        print()


class Node:  # class: Node
    def __init__(self, data):
        self.data = data
        self.next = None


# Function:to insert node at any position of a linked list
def insert_node_at_pos(head: None | Node, position: int, data: int) -> None | Node:
    if(head == None):
        head = Node(data) if position == 0 else None
        return head
    if(position == 0):
        new_node = Node(data)
        new_node.next = head
        head = new_node
        return head
    curr_node = head
    curr_position = 0
    while(curr_position != position - 1 and curr_node):
        curr_position += 1
        curr_node = curr_node.next
    if(curr_node == None):
        return head
    new_node = Node(data)
    new_node.next = curr_node.next
    curr_node.next = new_node
    return head


# create a linked list
my_llist = LinkedList()

# insert elements at any position
my_llist.head = insert_node_at_pos(my_llist.head, 1, 1)
my_llist.print_list()

my_llist.head = insert_node_at_pos(my_llist.head, 0, 100)
my_llist.print_list()

my_llist.head = insert_node_at_pos(my_llist.head, 1, 10)
my_llist.print_list()

my_llist.head = insert_node_at_pos(my_llist.head, 0, 800)
my_llist.print_list()

my_llist.head = insert_node_at_pos(my_llist.head, 2, 20)
my_llist.print_list()

my_llist.head = insert_node_at_pos(my_llist.head, 3, 30)
my_llist.print_list()

my_llist.head = insert_node_at_pos(my_llist.head, 4, 40)
my_llist.print_list()

my_llist.head = insert_node_at_pos(my_llist.head, 6, 60)
my_llist.print_list()

# testing: position = -100 (underflow)
my_llist.head = insert_node_at_pos(my_llist.head, -100, -100)
my_llist.print_list()
# testing: position = 100 (overflow)
my_llist.head = insert_node_at_pos(my_llist.head, 100, 100)
my_llist.print_list()

# OUTPUT
# The Linked List
# The Linked List -> 100
# The Linked List -> 100-> 10
# The Linked List -> 800-> 100-> 10
# The Linked List -> 800-> 100-> 20-> 10
# The Linked List -> 800-> 100-> 20-> 30-> 10
# The Linked List -> 800-> 100-> 20-> 30-> 40-> 10
# The Linked List -> 800-> 100-> 20-> 30-> 40-> 10-> 60
# The Linked List -> 800-> 100-> 20-> 30-> 40-> 10-> 60
# The Linked List -> 800-> 100-> 20-> 30-> 40-> 10-> 60
