
// The power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Given a string s, return the power of s.

 

// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
 

// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters.


// 

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let powers=[]
    let words=''
    for(let i=0; i<s.length;i++){
        if(s[i]===s[i+1]){
            words=words+s[i]
        }

        else{
            powers.push(words+s[i])
            words=''

        }
    }

return powers.sort((a,b)=>b.length-a.length)[0].length

};

console.log(maxPower("leetcode"))