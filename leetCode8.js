
// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// find places where two numbers are the same
// we want to know for a given array, how many pairs of numbers are the same value. 



// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

// given an array of numbers
// returning a single number reprepresting the number of "good pairs"
// good pairs are matching numbers, without duplicates or reverse pairs.


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var numIdenticalPairs = function(nums) {
//     //
//         let counter= 0
    
//     // used two loops to itinerate through the numbers, finding the pairs and counting them.

//         for(let i=0; i<nums.length; i++){
//             for(let j=i+1; j<nums.length; j++){
//                 console.log(nums[i])
//                 console.log(nums[j])
//                     if(nums[i]==nums[j]){
//                         counter+=1

//                     }

//             }
//         }
//     return counter

// };

// let nums = [1,2,3,1,1,3]
// console.log(numIdenticalPairs(nums))

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    nums
    let counts= {}
    let ans=0
    for(val of nums){
        if(!(val in counts )){
            console.log(val)
            counts[val]=0
        }
        counts[val] +=1
        ans += counts[val] -1
    }
counts
return ans

// return Object.values(counts).map(items=>items-1).reduce((a,b)=>a+b)

};

let nums = [1,2,3,1,1,3,15]
console.log(numIdenticalPairs(nums))

