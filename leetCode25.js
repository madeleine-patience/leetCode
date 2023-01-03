// DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


function duplicateEncode(word){
word=word.toLowerCase()
let splitStr= word.split('')
return splitStr.map((items)=>word.indexOf(items)===word.lastIndexOf(items)?"(":")").join('')
}

console.log(duplicateEncode("aaAAbcDDD"))
//Input is a string
// Output is also a string made of brackets
// ( if character appears once
// ) if character appears more than once
//