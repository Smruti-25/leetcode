/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    
  const result = [];
  let i = 0;

  // ======================= before merging
  while (i < intervals.length && newInterval[0] > intervals[i][1]) {
    result.push(intervals[i]);
    i++;
  }

  // ======================= main merge
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  // ========================= after merge
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
    
    
    
    
//     const res = [];
    
//     for(let i = 0; i < intervals.length; i++){
//         if(newInterval[1] < intervals[i][0]){
//             res.push[newInterval];
//             return res.concat(intervals.slice(i));
//         } else if(newInterval[0] > intervals[i][1]){
//             res.push(intervals[i]);
//         } else {
//             newInterval = [Math.min(newInterval[0], intervals[i][0]),                                            Math.max(newInterval[1], intervals[i][1])];
//         }
//     }
//     res.push(newInterval);
//     return res;
};