/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let length= s.length
    let a= s.slice(0,length/2).toLowerCase()
    let b= s.slice(length/2,length).toLowerCase()

    let count=0
    // console.log(b.charAt(2))
    let vows= ["a","e","i","o","u"]
    for (let i=0; i<a.length; i++){
        vows.includes(a.charAt(i))? count+=1 : 0
        vows.includes(b.charAt(i))? count-=1 : 0
    }

    return !count

};

console.log(halvesAreAlike('book'))