/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let res = false;
    const stack = [];
    const closedToOpen = { "]":"[", ")":"(", "}":"{" };
    
    for(let c of s){
        if(c in closedToOpen) {
             if(stack[stack.length - 1] === closedToOpen[c]){
                 stack.pop();
             } else {
                 return false;
             }
        } else {
            stack.push(c);
        }
    }
    if(!stack.length){
        res = true;
    }
    return res;
};