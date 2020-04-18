/**
 * Given an array arr, replace every element in that array with the greatest element among the
 * elements to its right, and replace the last element with -1.
 *
 * After doing so, return the array.
 *
 * Example 1:
 * Input: arr = [17,18,5,4,6,1]
 * Output: [18,6,6,6,1,-1]
 *
 * Constraints:
 * 1 <= arr.length <= 10^4
 * 1 <= arr[i] <= 10^5
 *
 */


/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = arr[arr.length-1];
    arr[arr.length-1] = -1;
    for (let i = arr.length-2; i > -1; i--) {
        if (arr[i]<max){
            arr[i] = max;
        } else {
            let temp = arr[i];
            arr[i] = max;
            max = temp;
        }
    }
    return arr;
};

console.log(replaceElements([17,18,5,4,6,1]));



