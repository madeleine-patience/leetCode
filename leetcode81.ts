// we get an array. Find two numbers in the array that match and remove them. Keep track of how many times you do this. Keep doing it until there are no more pairs.

// When thats done, return an array with two numbers, one with your count and one with the leftover numbers.

function numberOfPairs(nums: number[]): number[] {
  let counts = {};

  for (let individualNumber of nums) {
    if (!(individualNumber in counts)) {
      counts[individualNumber] = 0;
    }
    counts[individualNumber] += 1;
  }

  counts;
  let pairs = 0;
  let leftovers = 0;
  nums;
  for (let k in counts) {
    let v = counts[k];
    v;
    pairs += Math.floor(v / 2);
    leftovers += v % 2;
  }

  return [pairs, leftovers];
}

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2]));

// Example 1:

// Input: nums = [1,3,2,1,3,2,2]
// Output: [3,1]
// Explanation:
// Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
// Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
// Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
// No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.
