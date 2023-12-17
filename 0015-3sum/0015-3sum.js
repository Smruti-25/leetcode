/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    nums = nums.sort((a, b) => a - b)
    
    // a+b+c = 0
    //iterating for a
    for(let i=0;i<nums.length;i++){
        //we dont want duplicate triplets
        if(i > 0 && nums[i] === nums[i-1]){
            continue;
        }
        
        //two pointers for b and c
        let l = i + 1;
        let r = nums.length - 1;
        
        while(l < r){
            let threeSum = nums[i] + nums[l] + nums[r];
            if(threeSum > 0){
                r--;
            } else if(threeSum < 0){
                l++;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                while(nums[l] === nums[l-1]){
                    l++;
                }
            }
        }
    }
    return res;
};