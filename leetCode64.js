<<<<<<< HEAD
// Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

// Return the positive integer k. If there is no such integer, return -1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  nums = nums.sort((a, b) => b-a);
nums
    for(let i=0; i<nums.length; i++){
        if(nums.includes(-nums[i])){
            return nums[i]

        }

    }

return -1

};

console.log(findMaxK([-1,2,-3,3]));

// Example 1:

// Input: nums = [-1,2,-3,3]
// Output: 3
// Explanation: 3 is the only valid k we can find in the array.
// Example 2:

// Input: nums = [-1,10,6,7,-7,1]
// Output: 7
// Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.
// Example 3:

// Input: nums = [-10,8,6,7,-2,-3]
// Output: -1
// Explanation: There is no a single valid k, we return -1.
=======

var minimumRounds = function(tasks) {
    let counts = {}

    for(num of tasks){
        if(!(num in counts)){
            counts[num] = 0
        }
        counts[num] += 1
    }

    let rounds=0

    for(let [difficulty, count] of Object.entries(counts)) { 
        if(count==1){
            return -1
        }
        while(count>0 ) {
            if(count==4|| count==2){
                count=count-2
                rounds+=1
            }
            else{
                count=count-3   
                rounds+=1
            }
        }   
    }

    return rounds
};
>>>>>>> e3afecef7e263cb9c009c496454da69d7b8e5b0b
