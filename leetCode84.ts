// You are given an integer array nums where the largest integer is unique.

// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

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

// You receive an array of numbers. The largest number is unique.
// Determine whether the largest number is at LEAST twice as much as ever other number. If it is, return the index of the largets number otherswise -1.

function dominantIndex(nums: number[]): number {
  const biggestNum = Math.max(...nums);
  const secondBiggest = Math.max(...nums.filter((num) => num !== biggestNum));
  const isTwiceAsBig = secondBiggest * 2 <= biggestNum;
  isTwiceAsBig;
  return isTwiceAsBig ? nums.indexOf(biggestNum) : -1;
}

// const isTwiceAsBig= nums[1]*2 <= biggestNum
// return isTwiceAsBig? keptArray.indexOf(biggestNum):-1

console.log(dominantIndex([1, 2, 3, 4]));
