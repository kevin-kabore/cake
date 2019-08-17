// reverseWords in place
// message is array
function reverseWords(message) {
  reverseChars(message);

  let currentWordStartIndex = 0;
  for (var i = 0; i < message.length; i++) {
    if (message[i] === ' ' || i === message.length - 1) {
      reverseChars(message, currentWordStartIndex, i-1);
      currentWordStartIndex = i + 1;  
    }
  }

  const reverseChars = (arr, leftIndex, rightIndex) =>  {
    while(leftIndex < rightIndex) {
      // let temp = arr[leftIndex];
      // arr[leftIndex] = arr[rightIndex];
      // arr[rightIndex] = temp;
      [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
      leftIndex++;
      rightIndex--;
    }
  }
}


// Tests

let desc = 'one word';
let input = 'vault'.split('');
reverseWords(input);
let actual = input.join('');
let expected = 'vault';
assertEqual(actual, expected, desc);

desc = 'two words';
input = 'thief cake'.split('');
reverseWords(input);
actual = input.join('');
expected = 'cake thief';
assertEqual(actual, expected, desc);

desc = 'three words';
input = 'one another get'.split('');
reverseWords(input);
actual = input.join('');
expected = 'get another one';
assertEqual(actual, expected, desc);

desc = 'multiple words same length';
input = 'rat the ate cat the'.split('');
reverseWords(input);
actual = input.join('');
expected = 'the cat ate the rat';
assertEqual(actual, expected, desc);

desc = 'multiple words different lengths';
input = 'yummy is cake bundt chocolate'.split('');
reverseWords(input);
actual = input.join('');
expected = 'chocolate bundt cake is yummy';
assertEqual(actual, expected, desc);

desc = 'empty string';
input = ''.split('');
reverseWords(input);
actual = input.join('');
expected = '';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}