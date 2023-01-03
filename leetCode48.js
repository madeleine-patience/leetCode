var canMakeArithmeticProgression = function(arr) {
    // sort the array
        arr=arr.sort((a,b)=> a-b)
        
    //find the difference between two numbers
        let difference= arr[1]-arr[0]
        
    // loop through the array and see if they go up by the difference, if not return false.

        for(let i=0; i<arr.length-1; i++){
            console.log(arr[i])
            console.log(arr[i]+difference)

            if((arr[i]+difference)!==arr[i+1]){
                return false
            }
        }

        return true 


};
    console.log(canMakeArithmeticProgression([3,5,1]))
    console.log(canMakeArithmeticProgression([1,2,3,4,5,6,7,19]))

//Receive an array of nums
// Returning true or false
// Return true if array has "arithmetic progression"
// Return false if not.


// Example 1:

// Input: arr = [3,5,1]
// Output: true
// Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.
// Example 2:

// Input: arr = [1,2,4]
// Output: false
// Explanation: There is no way to reorder the elements to obtain an arithmetic progression.
 

// Constraints:

// 2 <= arr.length <= 1000
// -106 <= arr[i] <= 106