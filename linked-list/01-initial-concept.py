# ==============================================================================================
person1 = {
    "name": "Ahmed Faraz",
}
person2 = person1
person2["age"] = 22
print(person1)

# OUTPUT
# {'name': 'Ahmed Faraz', 'age': 22}

# ==============================================================================================
my_string: str = "ahmed faraz"
my_obj: object = {
    "country": "Pakistan"
}
my_list: list = ["karachi", "lahore", "islamabad"]

# Function to pass variables to check which follows pass-by-reference property


def pass_by_ref(str: str, obj: object, lst: list):
    str = "steve jobs"
    obj["country"] = "Australia"
    lst.append("Sidney")
    lst.append("Melbourne")
    print('INSIDE FUNCTION')
    print(my_string, my_obj, my_list)


print('BEFORE FUNCTION')
print(my_string, my_obj, my_list)
pass_by_ref(my_string, my_obj, my_list)
print('AFTER FUNCTION')
print(my_string, my_obj, my_list)

# OUTPUT
# BEFORE FUNCTION
# ahmed faraz {'country': 'Pakistan'} ['karachi', 'lahore', 'islamabad']
# INSIDE FUNCTION
# ahmed faraz {'country': 'Australia'} ['karachi', 'lahore', 'islamabad', 'Sidney', 'Melbourne']
# AFTER FUNCTION
# ahmed faraz {'country': 'Australia'} ['karachi', 'lahore', 'islamabad', 'Sidney', 'Melbourne']

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
num_list = [1, 2, 3, 4, 5]
for num in num_list:
    my_llist.head = insert_node(my_llist.head, num)

# print the list
my_llist.print_list()

# OUTPUT
# The Linked List -> 0-> 1-> 2-> 3-> 4
