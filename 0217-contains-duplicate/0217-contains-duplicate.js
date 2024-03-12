/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let duplicate = false;
    nums.sort();
    for(let i = 0; i<nums.length; i++){
        let l = i
        let r = i + 1
        if(nums[l] === nums[r]){
            duplicate = true;
        }
    }
    return duplicate;
};