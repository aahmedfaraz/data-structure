// ==============================================================================================

let obj1: { [key: string]: string | number } = {
    name: 'ahmed',
};
let data = obj1;
data.age = 22;
console.log(obj1);

// OUTPUT
// { name: 'ahmed', age: 22 }

// ==============================================================================================

let obj: { [key: string]: string | number } = {
    name: 'ahmed',
    age: 22,
}
let arr1 = [1, 2, 3, 4]
let myName = "AHMED FARAZ"

/**
 * @property {Function} passByReference to pass variables 
 * to check which follows pass-by-reference property 
 * @param {{ [key: string]: string | number }} objt 
 * @param {number[]} arrr 
 * @param {string} myName 
 * @returns {void}
 */
const passByReference: (
    objt: { [key: string]: string | number },
    arrr: number[],
    myName: string
) => void = (objt, arrr, myName) => {
    objt.profession = 'cloud expert';
    arrr.push(5);
    arrr.unshift(0);
    myName = "STEVE JOBS";
    console.log('INSIDE FUNCTION');
    console.log(obj, arr1, myName);
}

console.log('BEFORE FUNCTION');
console.log(obj, arr1, myName);
passByReference(obj, arr1, myName);
console.log('AFTER FUNCTION');
console.log(obj, arr1, myName);

// OUTPUT
// BEFORE FUNCTION
// { name: 'ahmed', age: 22 } [ 1, 2, 3, 4 ] AHMED FARAZ
// INSIDE FUNCTION
// { name: 'ahmed', age: 22, profession: 'cloud expert' } [ 0, 1, 2, 3, 4, 5 ] STEVE JOBS 
// AFTER FUNCTION
// { name: 'ahmed', age: 22, profession: 'cloud expert' } [ 0, 1, 2, 3, 4, 5 ] AHMED FARAZ

// ==============================================================================================
import { LinkedList, LinkedListNode } from './utils/types';

let arr2 = [0, 1, 2, 3, 4, 5]; // converting this array into linked list
let myLinkedList = new LinkedList();

/**
 * @property {Function} insertNode function to insert a node at the end of the link list 
 * and return back the head
 * @param {LinkListNode} head pass by reference
 * @param {number} data data to be inserted at the targeted location (here in the end)
 * @returns {LinkedListNode} pointer to the head node
 */
const insertNode: (
    head: LinkedListNode | null,
    data: number
) => LinkedListNode = (head, data) => {
    console.log('DATA >> ', JSON.stringify(head), data)
    if (head == null) {
        head = new LinkedListNode(data);
        return head;
    }
    let currentHead = head;
    while (currentHead.next) {
        currentHead = currentHead.next
    }
    currentHead.next = new LinkedListNode(data);
    return head;
}

arr2.forEach(num => {
    myLinkedList.head = insertNode(myLinkedList.head, num);
    console.log("CURR HEAD >> ", JSON.stringify(myLinkedList.head), '\n');
})
console.log("FINAL LLIST >> ", JSON.stringify(myLinkedList));

// OUTPUT
// DATA >>  null 0
// CURR HEAD >>  {"data":0,"next":null}

// DATA >>  {"data":0,"next":null} 1
// CURR HEAD >>  {"data":0,"next":{"data":1,"next":null}}

// DATA >>  {"data":0,"next":{"data":1,"next":null}} 2
// CURR HEAD >>  {"data":0,"next":{"data":1,"next":{"data":2,"next":null}}}

// DATA >>  {"data":0,"next":{"data":1,"next":{"data":2,"next":null}}} 3
// CURR HEAD >>  {"data":0,"next":{"data":1,"next":{"data":2,"next":{"data":3,"next":null}}}}

// DATA >>  {"data":0,"next":{"data":1,"next":{"data":2,"next":{"data":3,"next":null}}}} 4
// CURR HEAD >>  {"data":0,"next":{"data":1,"next":{"data":2,"next":{"data":3,"next":{"data":4,"next":null}}}}}

// DATA >>  {"data":0,"next":{"data":1,"next":{"data":2,"next":{"data":3,"next":{"data":4,"next":null}}}}} 5
// CURR HEAD >>  {"data":0,"next":{"data":1,"next":{"data":2,"next":{"data":3,"next":{"data":4,"next":{"data":5,"next":null}}}}}}

// FINAL LLIST >>  {"head":{"data":0,"next":{"data":1,"next":{"data":2,"next":{"data":3,"next":{"data":4,"next":{"data":5,"next":null}}}}}}}