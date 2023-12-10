/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //boyre - moore majority
    let count = 0;
    let res;
    
    for(let i = 0; i< nums.length; i++){
        const n = nums[i];
        
        if(count === 0){
            res = n;
        } 
        (n === res ? count++ : count--);
    }
    return res;
};