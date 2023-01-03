/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    s=s.split('').sort().join('')
    t=t.split('').sort().join('')
    return s===t
    

};
console.log(isAnagram("anagram", "nagaram"))

// given two strings 
// return T or F if t is an anagram of F and false if not.


// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 



// 0,1,1,2,3,5,8,13