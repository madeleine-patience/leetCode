// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

 

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false
 

// Constraints:

// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.


// The problem defines correct capitalization as the following if it meets ONE of the conditions.
    //- All letters in the word are capitals
    //- All letters are not capitalized
    //- Only the first letter in a word is capitalized.

// We want to return true or false if the given string meets one of the criteria above. 

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {

let capitalizedFirstLetter=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()


    if(word===word.toUpperCase()){
        return true
    }

    else if(word===word.toLowerCase()){
        return true
    }

    else if(capitalizedFirstLetter===word){
        return true

    }

    return false

};

console.log(detectCapitalUse("FFFFFFFFFFFFFFFFFFFFf"))
