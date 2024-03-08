/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const myset = new Set();
    for(let n of nums){
        if(myset.has(n)){
            return true
        } else {
            myset.add(n);
        }
    }
    return false;
};