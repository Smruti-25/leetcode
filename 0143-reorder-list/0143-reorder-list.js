/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    //get the middle of the list
    let slow = head;
    let fast = head.next;
    
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    //slow would be pointing to the middle of the list
    let second = slow.next;
    //spliting the list into two
    slow.next = null
    
    //reverse the second half of the list
    let prevNode = null;
    while(second){
        let temp = second.next;
        second.next = prevNode;
        prevNode = second;
        second = temp;
    }
    
    //merge the two halves of the list
    let firstHalf = head;
    let secondHalf = prevNode;
    
    while(secondHalf){
        let temp1 = firstHalf.next
        let temp2 = secondHalf.next;
        firstHalf.next = secondHalf;
        secondHalf.next = temp1;
        firstHalf = temp1;
        secondHalf = temp2;
    }
};