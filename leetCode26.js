// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"


function onlyDuplicates(str) {
let splitStr= str.split('')
return splitStr.filter((items)=>str.indexOf(items)!==str.lastIndexOf(items)).join('')


}
console.log(onlyDuplicates("abccdefee"
))
//input is a string
// output is a string with non duplicates removed
