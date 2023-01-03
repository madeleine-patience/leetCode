// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

// Return the largest lucky integer in the array. If there is no lucky integer return -1.

 //Receive an array
 //Returning one single number that is the biggest of the luckies.


// Example 1:
// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
// Example 2:

// Input: arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
// Example 3:

// Input: arr = [2,2,2,3,3]
// Output: -1
// Explanation: There are no lucky numbers in the array.
 

// Constraints:

// 1 <= arr.length <= 500
// 1 <= arr[i] <= 500

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    //define an object
    let occurances={}
    let luckyNums=[]
    for(let element of arr){
        if(occurances[element]){
        occurances[element]+=1}
        else{
            occurances[element]=1
        }    
    }
    let keys= Object.keys(occurances)
    let vals= Object.values(occurances)
    keys
    vals

//  Instead of key[i]== val[i] you could instead do key[i]==occurances[key[i]]





    for(let i=0; i<keys.length;i++){

        if(keys[i]==vals[i])
        luckyNums.push(keys[i])
    
    
    }
    return luckyNums.length==0?-1: Math.max(...luckyNums)


};

console.log(findLucky([1,2,2,3,3,3]))