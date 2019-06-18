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
