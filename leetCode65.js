/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    // define a counter
    let counter=0
    let bigger= Math.max(a,b)
    let smaller= Math.min(a,b)
    smaller
    for(let i=1; i<=bigger;i++ ){
        if(a%i==0 && b%i==0){
            counter +=1
        }

    }
    return counter
};
console.log(commonFactors(12,6))

// Given two positive integers a and b, return the number of common factors of a and b.

// An integer x is a common factor of a and b if x divides both a and b.

 //Receive two nums, both positive and return the number of common factors(x) can be divided by both.
 

// Example 1:

// Input: a = 12, b = 6
// Output: 4
// Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.
// Example 2:

// Input: a = 25, b = 30
// Output: 2
// Explanation: The common factors of 25 and 30 are 1, 5.
 

// Constraints:

// 1 <= a, b <= 1000