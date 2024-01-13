/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
    k = k % nums.length; //if k is greater than nums.length we dont need to rotate whole array
    
    let l = 0;
    let r = nums.length - 1;
    
    while(l < r){
        let temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l++;
        r--;
    }
    
    l = 0;
    r = k - 1;
    while(l < r){
        let temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l++;
        r--;
    }
    
    l = k;
    r = nums.length - 1;
    while(l < r){
        let temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l++;
        r--;
    }
    
    return nums;
};