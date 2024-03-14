/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let complements = {
        ")":"(",
        "}":"{",
        "]":"["
    }
    
    for(let c of s){
        if(c in complements){
            if(stack.length && stack[stack.length - 1] === complements[c]){
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(c);
        }
    }
    
    if(!stack.length){
        return true;
    } else {
        return false;
    }
};