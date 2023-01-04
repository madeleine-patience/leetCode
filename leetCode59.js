/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
let alphabet = "abcdefghijklmnopqrstuvwxyz" 
for(let i=0; i<alphabet.length; i++){
    if(!(sentence.includes(alphabet[i]))){
        return false
    }
}

return true

};

console.log(checkIfPangram("abcdefghijklmnopppppqrstuvwyzwxy"))
// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false

// Panagram is a sentance where every letter of the alphabet appears once.
// You receive a string that contains only lowercase letters, return true if it contains every letter of the alphabet, return false otherwise.