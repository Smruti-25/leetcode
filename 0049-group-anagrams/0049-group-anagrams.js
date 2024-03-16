/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    
    for(let word of strs){
        let charCounts = getCharCount(word);
        let values = map.get(charCounts) || [];
        values.push(word);
        map.set(charCounts, values);
    }
    
    return [...map.values()];
};

const getCharCount = word => {
    const charCount = new Array(26).fill(0);
    for(let char of word){
        let charCode = getCode(char);
        charCount[charCode]++;
    }
    return buildKey(charCount);
}

const getCode = char => char.charCodeAt(0) - "a".charCodeAt(0);

const buildKey = charCount => charCount.toString();
