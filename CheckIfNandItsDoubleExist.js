/**
 * Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
 *
 * More formally check if there exists two indices i and j such that :
 * i != j
 * 0 <= i, j < arr.length
 * arr[i] == 2 * arr[j]
 *
 * Example 1:
 * Input: arr = [10,2,5,3]
 * Output: true
 * Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
 *
 * Example 2:
 * Input: arr = [7,1,14,11]
 * Output: true
 * Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
 *
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 ){
            let div = arr[i] / 2;
            let prod = arr[i] * 2;
            arr.splice(i,1);
            i--;
            if (arr.includes(div) || arr.includes(prod)){
                return  true;
            }
        }
    }
    return false;
};

console.log(checkIfExist([7,1,14,11]));//true
console.log(checkIfExist([10,2,5,3]));//true
console.log(checkIfExist([-2,0,10,-19,4,6,-8]));//false
console.log(checkIfExist([-10,12,-20,-8,15]));//true