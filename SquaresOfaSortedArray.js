/**
 * Given an array of integers A sorted in non-decreasing order, return an array of the squares
 * of each number, also in sorted non-decreasing order.
 *
 * Example 1:
 * Input: [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 *
 * Example 2:
 * Input: [-7,-3,2,3,11]
 * Output: [4,9,9,49,121]
 *
 *
 */


/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    for (let i = 0; i < A.length; i++) {
        A[i] = Math.pow(A[i],2);
    }
    A.sort(function (a,b) {
        return a - b;
    })
    return A;
};

console.log(sortedSquares([-7,-3,2,3,11]));