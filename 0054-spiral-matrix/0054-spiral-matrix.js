/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];
    let left = 0;
    let right = matrix[0].length //row length or number of columns
    let top = 0;
    let bottom = matrix.length //column length or number of rows
    
    while(left < right && top < bottom){
        
        //traverse row from left to right
        for(let i = left; i < right; i++){
            result.push(matrix[top][i]);
        }
        //reduce the topmost boundary
        top = top + 1;
        
        //traverse from top to bottom
        for(let i = top; i<bottom; i++){
            result.push(matrix[i][right-1]);
        }
        //reduce the rightmost boundary
        right = right - 1
        
        if(!(left < right && top < bottom)){ //incase its just one row
            break;
        }
        
        //traverse from right to left
        for(let i = right - 1; i >= left; i-- ){
            result.push(matrix[bottom - 1][i]);
        }
        //reduce the bottom boundary
        bottom = bottom - 1;
        
        //traverse from bottom to top
        for(let i = bottom - 1; i >= top; i--){
            result.push(matrix[i][left]);
        }
        //reduce the left boundary
        left = left + 1;
        
    }
    
    return result
};