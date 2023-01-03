/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let nums=[0,0,0]
var threeSum = function(nums) {
    nums=nums.sort()

    let arr= []
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){  
            for(let k=j+1;k<nums.length; k++){
                
                if((nums[i]+nums[j]+nums[k])==0){
                    let sorted= [nums[i],nums[j],nums[k]].sort()
                    if(!arr.includes(sorted)){
                        arr.push(sorted)

                        
                    }


                    // arr.push([nums[i],nums[j],nums[k]])


                }
           
                // console.log(i)
                // console.log(j)
                // console.log(k)
                // console.log(i, j, k); 
                // console.log(nums[i], nums[j], nums[k])
           
            } }}
 let set = new Set(arr.map(JSON.stringify))
 return Array.from(set).map(JSON.parse)

};
console.log(threeSum(nums))
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 
// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     let targetNum=0

//     for(let i=0;i<nums.length;i++){
//         for(let j=0; j<nums.length; j++){
//              targetNum= nums[i]+nums[j]
//             if((target==targetNum)&& i!==j ){
//                 return [i,j]
//             }