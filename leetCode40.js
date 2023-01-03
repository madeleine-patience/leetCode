
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 
// Given a single number
// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21
 

// Constraints:

// 1 <= n <= 10^5


function listify(n) {
 s=String(n)
 let a=[]
    for (let i = 0; i < s.length; i++) { 
        a.push(Number(s[i]))
    }
    return a
}

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {B
    let digits = listify(n)
    let addition= digits.reduce((a,b)=>a+b)
    let multiples= digits.reduce((a,b)=>a*b)
    return multiples-addition




};
console.log(subtractProductAndSum(234))