
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s


// receive two different strings
// Merge them together by adding letters in alternating order, starting with the first parameter.
// if a string is longer than the other, add the extra letters to the end of the string
// return the merged string.


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    // define an array where we can push stuff into
    let answer=[]
    let biggerWord= word1.length>word2.length?word1:word2
    biggerWord
   
    // for loop to alternate between word one and word two to push

    for(let i=0; i<biggerWord.length; i++){
        if(answer.length%2==0){
            if(word1[i])
            answer.push(word1[i])
        }
        answer.push(word2[i])

    }
    
return answer.join('')

};

console.log(mergeAlternately("abcd","pq"))