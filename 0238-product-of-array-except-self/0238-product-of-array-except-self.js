/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = [];
    let prefix = 1;
    let postfix = 1;
    
    //calculate prefixes
    for(let i = 0; i < nums.length; i++){
        output[i] = prefix 
        prefix = nums[i] * prefix

    }
    
    //calculate postfixes
    for(let i = nums.length - 1; i >= 0; i--){
        output[i] = postfix * output[i]
        postfix = nums[i] * postfix

    }
    return output;
};