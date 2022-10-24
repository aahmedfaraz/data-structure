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


# Function: to get node at any position
def get_node_at_pos(head: None | Node, position: int) -> None | int:
    if(head == None or position < 0):
        return None
    curr_node = head
    curr_position = 0
    while(curr_position != position and curr_node):
        curr_position += 1
        curr_node = curr_node.next
    if(curr_node is None):
        return None
    return curr_node.data


# create a linked list
my_llist = LinkedList()

# inserting elements to fill the list
my_llist.insert_node(10)
my_llist.insert_node(20)
my_llist.insert_node(30)
my_llist.insert_node(40)
my_llist.insert_node(50)

my_llist.print_list()

print()

# get elements at any position
print('node at position 3 is    :', get_node_at_pos(my_llist.head, 3))
print('node at position 0 is    :', get_node_at_pos(my_llist.head, 0))
print('node at position 1 is    :', get_node_at_pos(my_llist.head, 1))
# testing: position = -100 (underflow)
print('node at position -100 is :', get_node_at_pos(my_llist.head, -100))
# testing: position = 100 (overflow)
print('node at position 100 is  :', get_node_at_pos(my_llist.head, 100))

# OUTPUT
# The Linked List -> 10-> 20-> 30-> 40-> 50

# node at position 3 is    : 40
# node at position 0 is    : 10
# node at position 1 is    : 20
# node at position -100 is : None
# node at position 100 is  : None
