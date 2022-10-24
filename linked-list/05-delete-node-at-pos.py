# ==============================================================================================

class LinkedList():  # class LinkedList
    def __init__(self):
        self.head = None

    # method to insert node
    def insert_node(self, data: int):
        if(self.head == None):
            self.head = Node(data)
            return
        curr_node = self.head
        while(curr_node.next):
            curr_node = curr_node.next
        curr_node.next = Node(data)

    # method to print node
    def print_list(self):
        print('The Linked List', end=" ")
        curr_node = self.head
        while(curr_node):
            print("->", curr_node.data, end="")
            curr_node = curr_node.next
        print()


class Node:  # class Node
    def __init__(self, data):
        self.data = data
        self.next = None


# Function: to delete node at any position
def delete_node_at_pos(head: None | Node, position: int) -> None | Node:
    if(head == None or position < 0):
        return head
    if(position == 0):
        return head.next
    curr_node = head
    curr_position = 0
    while(curr_position != position - 1 and curr_node):
        curr_position += 1
        curr_node = curr_node.next
    if(curr_node is None):
        return head
    curr_node.next = curr_node.next.next
    return head


# create a linked list
my_llist = LinkedList()

# inserting elements to fill the list
my_llist.insert_node(10)
my_llist.insert_node(20)
my_llist.insert_node(30)
my_llist.insert_node(40)
my_llist.insert_node(50)

# printing list before manipulations
print('BEFORE MANIPULATIONS')
my_llist.print_list()

print()

# update elements at any position
print('AFTER MANIPULATIONS')
my_llist.head = delete_node_at_pos(my_llist.head, 3)
my_llist.print_list()

my_llist.head = delete_node_at_pos(my_llist.head, 0)
my_llist.print_list()

my_llist.head = delete_node_at_pos(my_llist.head, 1)
my_llist.print_list()

# testing: position = -100 (underflow)
my_llist.head = delete_node_at_pos(my_llist.head, -100)
my_llist.print_list()

# testing: position = 100 (overflow)
my_llist.head = delete_node_at_pos(my_llist.head, 100)
my_llist.print_list()

# OUTPUT
# BEFORE MANIPULATIONS
# The Linked List -> 10-> 20-> 30-> 40-> 50

# AFTER MANIPULATIONS
# The Linked List -> 10-> 20-> 30-> 50
# The Linked List -> 20-> 30-> 50
# The Linked List -> 20-> 50
# The Linked List -> 20-> 50
# The Linked List -> 20-> 50
