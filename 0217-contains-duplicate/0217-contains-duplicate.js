/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let duplicateFound = false
    let seen = new Set();
    for(let i = 0; i<nums.length; i++){
        if(seen.has(nums[i])){
            duplicateFound = true;
        } else {
            seen.add(nums[i]);
        }
    }
    return duplicateFound;
};