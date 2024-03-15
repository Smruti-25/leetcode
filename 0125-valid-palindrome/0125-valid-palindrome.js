/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    isAlphaNumeric = c => {
        if((c.toLowerCase() >= 'a' && c.toLowerCase() <= 'z') || c >= '0' && c <= '9')
            return true;
        else return false;
    }
    
    while(left < right){
        if(!isAlphaNumeric(s.charAt(left))){
            left++;
            continue;
        }
        if(!isAlphaNumeric(s.charAt(right))){
            right--;
            continue;
        }
        if(s.charAt(left).toLowerCase() !== s.charAt(right).toLowerCase()){
            return false;
        }
        
        left++;
        right--;
    }
    return true;
};