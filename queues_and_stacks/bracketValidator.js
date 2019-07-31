/*
    Bracket Validator

    You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.

    Let's say:

    '(', '{', '[' are called "openers."
    ')', '}', ']' are called "closers."
    Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

    Examples:

    "{ [ ] ( ) }" should return true
    "{ [ ( ] ) }" should return false
    "{ [ }" should return false

*/


function isValid(code) {
    if(code.length === 0) return true;

    const openersAndClosers = {
        '(': ')', 
        '{': '}', 
        '[': ']'
    };

    const openers = new Set(['(', '{', '[']),
        closers = new Set([')', '}', ']']),
        openerStack = [];

    for (let i = 0; i < code.length; i++) {
        let char = code[i];

        if(openers.has(char)) {
            openerStack.push(char);
        } else if(closers.has(char)) {
            if(!openerStack.length) return false;

            let lastOpener = openerStack.pop();

            if(char !== openersAndClosers[lastOpener]) return false;
        }
    }

    return openerStack.length === 0;
}


// Tests

let desc = 'valid short code';
assertEqual(isValid('()'), true, desc);

desc = 'valid longer code';
assertEqual(isValid('([]{[]})[]{{}()}'), true, desc);

desc = 'mismatched opener and closer';
assertEqual(isValid('([][]}'), false, desc);

desc = 'missing closer';
assertEqual(isValid('[[]()'), false, desc);

desc = 'extra closer';
assertEqual(isValid('[[]]())'), false, desc);

desc = 'empty string';
assertEqual(isValid(''), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

/* 
    Complexity
    O(n) time (one iteration through the string), and O(n) space (in the worst case, all of our characters are openers, so we push them all onto the stack).

    What We Learned
    The trick was to use a stack. ↴

    It might have been difficult to have that insight, because you might not use stacks that much.

    Two common uses for stacks are:

    parsing (like in this problem)
    tree or graph traversal (like depth-first traversal)
    So remember, if you're doing either of those things, try using a stack!
*/