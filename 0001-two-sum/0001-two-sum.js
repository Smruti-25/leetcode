/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const complement = {};
    
    for(let i = 0; i<nums.length; i++){
        let diff = target - nums[i];
        if(diff in complement){
            return [i, complement[diff]];
        } else {
            complement[nums[i]] = i;
        }
    }
};