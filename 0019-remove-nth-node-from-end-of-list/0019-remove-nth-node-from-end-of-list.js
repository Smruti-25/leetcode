/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //create a dummy node
    const dummy = new ListNode(0, head);
    let left = dummy;
    let right = head;
    
    //create the appropriate difference between the left and the right pointer
    while(n > 0 && right){
        right = right.next;
        n--;
    }
    
    //get the slow pointer to point to the prevNode of the Node to be deleted
    //right should be pointing to null nth to the end of the list should be the slow        pointer
    while(right){
        left = left.next;
        right = right.next;
    }
    
    //now that the left points to the prevNode
    //delete
    left.next = left.next.next;
    return dummy.next;
};