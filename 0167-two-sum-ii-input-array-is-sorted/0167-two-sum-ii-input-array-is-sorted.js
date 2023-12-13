/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while(left < right){
        let sum = numbers[left] + numbers[right]; 
        if(sum < target){
            left++;
        } else if(sum > target){
            right--;
        } else {
            return [left + 1, right + 1];
        }
    }   
    return [];
};

//dry run
// target = 
// left = 0
// right = 1
// result[1,2]

// 1. 0!= 3, 2+15 !=9, 2+15 > 9, 
// 2. 0!=2, 2=11 != 9, 2+11 > 9,
// 3. 0!=1, 2+7 === 9