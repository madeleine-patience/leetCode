function sumOfMultiples(n: number): number {
  // define an empty array to catch the  numbers we need.
  let divisibleNums = [];
  // for loop that pushes numbers into empty array based on what they are divisible by.
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
      divisibleNums.push(i);
    }
  }
  return divisibleNums.reduce((a, b) => a + b, 0);

  // reduce the array at the top and return?
}

console.log(sumOfMultiples(10));

//Receive a positive number.
// Find all the number in the range of 1 to The number we get that are divisible by 3,5 or 7.
// Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.

// Return an integer denoting the sum of all numbers in the given range satisfying the constraint.

// Example 1:
// Input: n = 7
// Output: 21
// Explanation: Numbers in the range [1, 7] that are divisible by 3, 5, or 7 are 3, 5, 6, 7. The sum of these numbers is 21.

// Example 2:
// Input: n = 10
// Output: 40
// Explanation: Numbers in the range [1, 10] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9, 10. The sum of these numbers is 40.
