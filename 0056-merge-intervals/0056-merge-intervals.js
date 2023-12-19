/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let res = [intervals[0]];
    
    for(let i = 0; i<intervals.length; i++){
        let start = intervals[i][0];
        let end = intervals[i][1];
        
        if(start <= res[res.length-1][1]){
            res[res.length - 1][1] = Math.max(end, res[res.length - 1][1]);
        } else {
            res.push([start, end]);
        }
    }
    
    return res;
};