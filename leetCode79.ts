function maxNumberOfBalloons(text: string): number {
  let amountOfBallons = 0;
  let lettersWeNeed = { b: 0, a: 0, l: 0, o: 0, n: 0 };
  for (let letters of text) {
    if (letters in lettersWeNeed) {
      lettersWeNeed[letters] += 1;
    }
  }

  while (
    lettersWeNeed.b > 0 &&
    lettersWeNeed.a > 0 &&
    lettersWeNeed.l >= 2 &&
    lettersWeNeed.o >= 2 &&
    lettersWeNeed.n > 0
  ) {
    amountOfBallons += 1;
    lettersWeNeed.b -= 1;
    lettersWeNeed.a -= 1;
    lettersWeNeed.l -= 2;
    lettersWeNeed.o -= 2;
    lettersWeNeed.n -= 1;
  }

  return amountOfBallons;
}

console.log(maxNumberOfBalloons("nlaebolko"));
// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:

// Input: text = "nlaebolko"
// Output: 1
// Example 2:

// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0
