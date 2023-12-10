/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const len = nums.length;
    const count = {};
    let res = 0;
    let maxCount = 0;
    
    for(let i = 0; i < len; i++ ){
        const n = nums[i];
        if(count.hasOwnProperty(n)){
            count[n] = count[n] + 1;
            if(count[n] > maxCount){
                res = n;
                maxCount = count[n];
            }
        } else {
            count[n] = 1;
            if(len === 1){
                res = n;
                maxCount = 1;
            }
        }
    }
    return res;
};