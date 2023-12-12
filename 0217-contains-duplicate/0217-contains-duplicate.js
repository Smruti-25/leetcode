/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let result = false;
    let prevMap = {};
    
    for(let i of nums){
        //check whether the element exists in the prevMap or not
        if(prevMap[i]){
            result = true;
        }
        prevMap[i] = 1;
    }
    
    return result;
};

//dry run
// i = 1, 2, 3
// prevMap[1] ? = T
// prevMap = {1: 1, 2:1, 3:1,  }
// result = True
    

    