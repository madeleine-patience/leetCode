function duplicateSandwich(a) {
let checkType= typeof a
if(checkType==="string"){
    a=a.split('')
}
let dup= a.filter((items,index,array)=> array.indexOf(items)!==array.lastIndexOf(items))[0]

let firstDup= a.indexOf(dup)+1
let lastDup= a.lastIndexOf(dup)
return checkType==="string"? a.slice(firstDup,lastDup).join(''):a.slice(firstDup,lastDup)

  }


  console.log(duplicateSandwich("example"))
  console.log(duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"]))



//   Task
// In this kata you will be given a list consisting of unique elements except for one thing that appears twice.

// Your task is to output a list of everything inbetween both occurrences of this element in the list.

// Examples:
// [0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
// ["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
// [0, 0] => []
// [true, false, true] => [false]
// "example" => "xampl"
// Notes
// All elements will be the same datatype.
// All used elements will be primitive.