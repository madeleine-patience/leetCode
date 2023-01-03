function isSortedAndHow(array) {
let keptArr= array.slice().join('')
let keptArr2= array.slice()
let ascending = array.sort((a,b)=>a-b).join('')
let descending = keptArr2.sort((a,b)=> b-a).join('')

return ascending==keptArr? "yes, ascending": descending== keptArr? "yes, descending" : "no"


}


console.log(isSortedAndHow( [1,2]))
console.log(isSortedAndHow([1,52,3,1,26]))


// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.







//P Accepts an array of numbers
// Returning a string: 
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise

// E 
// it("[1, 2]", function() {
//     Test.assertEquals(isSortedAndHow([1, 2]), 'yes, ascending');
//   });
  









// it("[1, 2]", function() {
//     Test.assertEquals(isSortedAndHow([1, 2]), 'yes, ascending');
//   });
  