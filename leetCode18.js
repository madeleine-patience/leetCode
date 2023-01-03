function vowel2index(str) {
str=str.split('')
let vows= "aeiouAEIOU".split('')
return str.map((items,index)=> vows.includes(items)? index+1:items).join('')


}
 
 console.log(vowel2index("Madies STREAM"))
 // P - Parameters- a single string
 // R- Returns a string with the vowels replaced in their position
 // E- Examples below
 // P 

//  Write a function

//  vowel2index(str)
//  that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
//  E.g:
 
//  vowel2index('this is my string') == 'th3s 6s my str15ng'
//  vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
//  vowel2index('') == ''


