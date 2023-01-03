// You are given an integer array nums where the largest integer is unique.

// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

//receive an array
// output will be a single number, the index of the largest element if it meets the conditions. -1 if otherwise.

// Example 1:

// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: -1
// Explanation: 4 is less than twice the value of 3, so we return -1.

// Input: nums = [3,6,1,0]

[11, 10, 42, 33, 17, 7, 85];

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  nums;
  let biggestNum = Math.max(...nums);
  let biggestIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == biggestNum) {

    } else if (biggestNum < nums[i] * 2) {
      return -1;
    }
  }
    return nums.indexOf(biggestNum)
    //find the biggest number in the array

    //
};

console.log(dominantIndex([3, 100000, 1, 0]));
