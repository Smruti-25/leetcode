/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let validS = false;
    const complements = {
        "(":")",
        "[":"]",
        "{":"}"
    };
    
    let res = [];
    for(let i of s){
        if(complements[i]){
            res.push(i);
        } else if(i === complements[res[res.length - 1]]){
            res.pop();
        } else {
            return false;
        }
    }
    if(!res.length){
            validS = true;
    }
    return validS;
};