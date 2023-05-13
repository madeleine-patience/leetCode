// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

// Example 1:
// Input: nums = [2,5,6,9,10]
// Output: 2
// Explanation:
// The smallest number in nums is 2.
// The largest number in nums is 10.
// The greatest common divisor of 2 and 10 is 2.
// Example 2:

// Input: nums = [7,5,6,8,3]
// Output: 1
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 8.
// The greatest common divisor of 3 and 8 is 1.
// Example 3:

// Input: nums = [3,3]
// Output: 3
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 3.

function findGCD(nums: number[]): number {
// pull out the biggest and the smallest number and put them in variables.
    let smallest= Math.min(...nums)
    let biggest= Math.max(...nums)

// define an array to catch the divisors
    let divisors= []
// use a for loop to find the numbers divisble by both numbers
    for(let i=1; i<=smallest; i++){
        if(smallest%i==0 && biggest%i==0){
            divisors.push(i)
        }

    }
    return Math.max(...divisors)

// return the biggest

};

console.log(findGCD([2,5,6,9,10]))