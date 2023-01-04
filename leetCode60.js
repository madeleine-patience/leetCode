// /**
//  * @param {string[]} strs
//  * @return {number}
//  */
// var minDeletionSize = function(strs) {
//     console.log(strs[0])
//     if(strs[0].length<=1){
//         let kept= strs.slice().join('')
//         let sorted= strs.sort().join('')
//         let test= kept===sorted
//         return test===true?0:1
//     }

//     let counter =0
//     let grid=''
//     let newArr=[]

//     strs
//     for(let i=0; i<strs.length;i++){
//         for(let k=0; k<strs.length; k++){
//         if (grid.length>=strs.length){
//             newArr.push(grid)
//             grid=''
//         } 
//             grid=grid+(strs[k][i])
//         }}

//         newArr.push(grid)
//         newArr
//         for(let i=0; i<grid.length; i++){
//             console.log(newArr[i])
//             if(!(newArr[i]===newArr[i].split('').sort().join('')))
//             counter+=1
//         }

//         return counter
// };


/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    console.log(strs[0])
    if(strs[0].length<=1){
        let kept= strs.slice().join('')
        let sorted= strs.sort().join('')
        let test= kept===sorted
        return test===true?0:1
    }

    let counter =0
    let grid=''
    let newArr=[]

    strs
    for(let i=0; i<strs[0].length;i++){
        for(let k=0; k<strs.length; k++){

        if (grid.length>=strs.length){
            newArr.push(grid)
            grid=''
        } 
            grid=grid+(strs[k][i])
        }}

        newArr.push(grid)
        newArr
        for(let i=0; i<newArr.length; i++){
            console.log(newArr[i])
            if(!(newArr[i]===newArr[i].split('').sort().join('')))
            counter+=1
        }

        return counter
};



console.log(minDeletionSize(["rrjk","furt","guzm"]))


rrjk
furt
guzm
