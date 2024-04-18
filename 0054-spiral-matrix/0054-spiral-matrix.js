/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];
    let left = 0;
    let top = 0;
    let right = matrix[0].length; //number of columns
    let bottom = matrix.length; //number of rows

    while(left < right && top < bottom){
        
        //top row
        for(let i = left; i < right; i++){
            res.push(matrix[top][i]);
        }
        top = top + 1;
        
        //rightmost column
        for(let i = top; i < bottom; i++){
            res.push(matrix[i][right - 1]);
        }
        right = right - 1;
        
        if(!(left < right && top < bottom)){
            break;
        }
        
        //bottom row
        for(let i = right - 1; i >= left; i--){
            res.push(matrix[bottom - 1][i]);
        }
        bottom = bottom - 1;
        
        //first colums
        for(let i = bottom - 1; i >= top; i--){
            res.push(matrix[i][left]);
        }
        left = left + 1;
    }

    return res;
};