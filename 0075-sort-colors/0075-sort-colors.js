/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0, right = nums.length - 1, i=0;
    
    const swap = (a,b) => {
        let temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
    
    //dutch national flag algorithm
    while(i <= right){
        if(nums[i] === 0){
            swap(i, left);
            left++;
        } else if(nums[i] === 2){
            swap(i, right);
            right--;
            i--
        }
        i++;
    }
};