/**
 * 
 * I like parentheticals (a lot).
 * 
 * "Sometimes (when I nest them (my parentheticals) too much (like this (and this)) they get confusing."
 * 
 * Write a function that, given a sentence like the one above, along with the position of an opening parenthesis,
 * finds the corresponding closing parenthesis.
 * 
 * Example: if the example string above is input with the number 10 (position of the first parenthesis), the
 * output should be 79 (position of the last parenthesis).
 * 
 */


 // Can be done in O(n) time and O(1) space if use a counter instead of stack

 function getClosingParen(sentence, openingParenIndex) {
    let openParens = 1;

    for(let i = openingParenIndex + 1; i < sentence.length; i++) {
        let char = sentence[i];
        
        if(char === '(') {
            openParens++;
        } else if(char === ')') {
            openParens--;
            if(openParens === 0) return i;
        }
    }

    throw new Error('No Matching Closing Paren found.');

 }


 // Tests

let desc = 'all openers then closers';
let actual = getClosingParen('((((()))))', 2);
let expected = 7;
assertEqual(actual, expected, desc);

desc = 'mixed openers and closers';
actual = getClosingParen('()()((()()))', 5);
expected = 10;
assertEqual(actual, expected, desc);

desc = 'no matching closer';
const noCloser = () => (getClosingParen('()(()', 2));
assertThrowsError(noCloser, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}

/* 

What We Learned

The trick to many "parsing" questions like this is using a stack to track which brackets/phrases/etc are "open" as you go.

So next time you get a parsing question, one of your first thoughts should be "use a stack!"

In this problem, we can realize our stack would only hold '(' characters. So instead of storing each of those characters in a stack, we can store the number of items our stack would be holding.

That gets us from O(n)O(n) space to O(1)O(1) space.

It's pretty cool when you can replace a whole data structure with a single integer :)

*/