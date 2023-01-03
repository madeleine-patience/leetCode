
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0
let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    grid=grid.flat()
    let negatives=0
    for(let i=0; i<grid.length;i++){
        if(grid[i]<0){
            negatives+=1

        }
    
    }
    return negatives

};

console.log(countNegatives(grid))