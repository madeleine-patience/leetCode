/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {

let prefix=[]
strs=strs.sort((a,b)=>a.length-b.length).map(items=>items.split(''))
strs
for(let i=0; i<strs[0].length; i++){
    for(let j=0;j<strs[i].length;j++){
    if(strs[0][j]===strs[i][j])
    {
      prefix.push(strs[i][j])  

    }


    }
}

prefix

};


console.log (longestCommonPrefix(["flower","flow","flight"]))