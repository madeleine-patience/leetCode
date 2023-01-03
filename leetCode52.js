// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  

 

// Example 1:

// Input: n = 4
// Output: "pppz"
// Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once. Note that there are many other valid strings such as "ohhh" and "love".
// Example 2:

// Input: n = 2
// Output: "xy"
// Explanation: "xy" is a valid string since the characters 'x' and 'y' occur once. Note that there are many other valid strings such as "ag" and "ur".
// Example 3:

// Input: n = 7
// Output: "holasss"

// /**
//  * 
//  * receive a single number
//  * 
//  * 
//  * 
//  * @param {number} n
//  * @return {string}
//  */
// var generateTheString = function(n) {
//     // determine whether n is even or odd.
//     let isItEven= n%2==0
//     let halfises= n/2
//     halfises
//     let answerString=[]
//     // if(isItEven){
//     //     answerString.push()

//     // }
//     answerString
//     // for loop with ifs, if pos or if neg
//     for(let i=0; i<n/2;i++){
//         answerString.push("ab")
//     }

//     if(isItEven){
//         return answerString.join('')
//     }

//     else{        
//         let additionalC= answerString.push("c")

//     }
// return answerString.join('')

// };



var generateTheString = function(n) {
    let alphabet = "bcdefghijklmnopqrstuvwxyz"

    
    if (n<25){
    return alphabet.slice(0,n)
    }

console.log(n-25)

    for(let i=0; i<n-25; i++){
        if((n-25)%2==0){
           alphabet=alphabet+"a"

        }
        else{
            alphabet=alphabet+"a"


        }


    }
console.log(n-26)

return n-26 %2==0? alphabet+"c" : alphabet
};
console.log(generateTheString(77))



var generateTheString = function(n) {
let answer= []

    for(i=0; i<n;i++){
            answer.push("a")
        }



    if(n%2==0){
        return answer.splice(1).join('')+"c"
    }
    else{
        return answer.join('')
    }
};
console.log(generateTheString(6))
