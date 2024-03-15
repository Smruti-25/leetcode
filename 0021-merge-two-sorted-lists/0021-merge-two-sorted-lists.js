/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode();
    let tailNode = dummy;
    
    while(list1 && list2){
        if(list1.val <= list2.val){
            tailNode.next = list1
            list1 = list1.next;
        } else {
            tailNode.next = list2;
            list2 = list2.next;
        }
        tailNode = tailNode.next;
    }
    
    if(list1){
        tailNode.next = list1
    } else if(list2){
        tailNode.next = list2;
    }
    
    return dummy.next;
};