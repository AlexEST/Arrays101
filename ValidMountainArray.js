/**
 * Given an array A of integers, return true if and only if it is a valid mountain array.
 *
 * Example 1:
 * Input: [2,1]
 * Output: false
 *
 * Example 2:
 * Input: [3,5,5]
 * Output: false
 *
 * Example 3:
 * Input: [0,3,2,1]
 * Output: true
 *
 */

/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if (A.length<2){
        return false;
    }
    let high = true;
    let low = false;
    for (let i = 0; i < A.length; i++) {
        if (high){
            if (A[i]>=A[i+1]){
                if (A[i]===A[i+1] || A[0]>A[1]){
                    return  false;
                }
                high = false;
                low = true;
            }
        }
        if (low){
           if (A[i]<=A[i+1]){
               return false;
           }
        }
    }
    if (low===false){
        return false;
    }
    return true;
};

console.log(validMountainArray([0,3,2,1]));//true