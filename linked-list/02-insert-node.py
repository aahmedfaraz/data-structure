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


class Node:  # class: Node
    def __init__(self, data):
        self.data = data
        self.next = None


# Function:to insert node at the end of a linked list
def insert_node(head: None | Node, data: int) -> None | Node:
    if(head == None):
        head = Node(data)
        return head
    curr_node = head
    while(curr_node.next):
        curr_node = curr_node.next
    curr_node.next = Node(data)
    return head


# create a linked list
my_llist = LinkedList()

# insert elements
my_llist.head = insert_node(my_llist.head, 0)
my_llist.head = insert_node(my_llist.head, 1)
my_llist.head = insert_node(my_llist.head, 2)
my_llist.head = insert_node(my_llist.head, 3)
my_llist.head = insert_node(my_llist.head, 4)

# print the list
my_llist.print_list()

# OUTPUT
# The Linked List -> 0-> 1-> 2-> 3-> 4
