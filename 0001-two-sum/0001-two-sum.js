/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let complements = {};
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        if(diff in complements){
            return [i, complements[diff]];
        }
        complements[nums[i]] = i;
    }
};

