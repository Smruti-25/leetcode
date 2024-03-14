/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let computeSum = 0;
    
    for(let i of nums){
        if(computeSum < 0){
            computeSum = 0 //reset the window
        }
        computeSum += i
        maxSum = Math.max(computeSum, maxSum);
    }
    return maxSum;
};