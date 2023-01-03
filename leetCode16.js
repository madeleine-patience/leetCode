function oddCount(n){
// return (n-1)/2
return n%2==0? n/2 : Math.floor(n/2)


}


console.log( oddCount(1043828847451888))

// assert.strictEqual(oddCount(15), 7, "Oops! Wrong.");
// assert.strictEqual(oddCount(15023), 7511, "Oops! Wrong.");

//P - parameter- a single number
// R- a number
// E  - 7 are [1, 3, 5])
//P - 



// DESCRIPTION:
// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!


//P - 