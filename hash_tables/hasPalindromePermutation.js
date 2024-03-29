/**
 * 
 * Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

    You can assume the input string only contains lowercase letters.

    Examples:

    "civic" should return true
    "ivicc" should return true
    "civil" should return false
    "livci" should return false
 * 
 */

// Brute force: check every permutation of the input string to see if it is a palindrome.
// > That gives us O(n!n) time overall. 

// Cleaner approach: "keep two pointers" pattern.
// > use obj to get count of each char, should be even for all, except for one if string is not even

// Even cleaner: only need to track odd chars. Can use a set.
// If encounter it first time, add to set
// If second time, remove from set
// At end, check that size of set is <= 1; If so, return true

function hasPalindromePermutation(theString) {

    let unpairedChars = new Set();
    for(let char of theString) {
        if(unpairedChars.has(char)) {
            unpairedChars.delete(char);
        } else {
            unpairedChars.add(char);
        }
    }
     
    if (unpairedChars.size <= 1) return true;
    
    return false;
}
  

// Tests

let desc = 'permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);

desc = 'permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

desc = 'no permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcd'), false, desc);

desc = 'no permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

desc = 'empty string';
assertEqual(hasPalindromePermutation(''), true, desc);

desc = 'one character string ';
assertEqual(hasPalindromePermutation('a'), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
// Cleaner approach: "keep two pointers" pattern.
// > use obj to get count of each char, should be even for all, except for one if string is not even

// Even cleaner: only need to track odd chars. Can use a set.
// If encounter it first time, add to set
// If second time, remove from set
// At end, check that size of set is <= 1; If so, return true

function hasPalindromePermutation(theString) {

    let unpairedChars = new Set();
    for(let char of theString) {
        if(unpairedChars.has(char)) {
            unpairedChars.delete(char);
        } else {
            unpairedChars.add(char);
        }
    }
     
    if (unpairedChars.size <= 1) return true;
    
    return false;
}
  

// Tests

let desc = 'permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);

desc = 'permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

desc = 'no permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcd'), false, desc);

desc = 'no permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

desc = 'empty string';
assertEqual(hasPalindromePermutation(''), true, desc);

desc = 'one character string ';
assertEqual(hasPalindromePermutation('a'), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
  