/*
  In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

  Each order is represented by an "order id" (an integer).

  We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

  For example:

  const myArray = [3, 4, 6, 10, 11, 15];
  const alicesArray = [1, 5, 8, 12, 14, 19];

  console.log(mergeArrays(myArray, alicesArray));
  // logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

*/

function mergeArrays(myArr, alicesArr) {

  // Combine the sorted arrays into one large sorted array
  
  const mergedArr = [];
  
  let i = 0, j = 0;
  
  while(i < myArr.length && j < alicesArr.length) {
    if(myArr[i] < alicesArr[j]) {
      mergedArr.push(myArr[i]);
      i++;
    } 
    if(alicesArr[j] < myArr[i]) {
      mergedArr.push(alicesArr[j]);
      j++;
    } 
    if(myArr[i] === alicesArr[j]){
      mergedArr.push(myArr[i]);
      mergedArr.push(alicesArr[j]);
      i++;
      j++;
    }
  }
  return mergedArr.concat(myArr.slice(i), alicesArr.slice(j));

}

/** Interview Cake Solution */
function mergeArrays(myArray, alicesArray) {

  // Set up our mergedArray
  const mergedArray = [];

  let currentIndexAlices = 0;
  let currentIndexMine = 0;
  let currentIndexMerged = 0;

  while (currentIndexMerged < (myArray.length + alicesArray.length)) {

    const isMyArrayExhausted = currentIndexMine >= myArray.length;
    const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;

    // Case: next comes from my array
    // My array must not be exhausted, and EITHER:
    // 1) Alice's array IS exhausted, or
    // 2) The current element in my array is less
    //    than the current element in Alice's array
    if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
      (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {

      mergedArray[currentIndexMerged] = myArray[currentIndexMine];
      currentIndexMine++;

      // Case: next comes from Alice's array
    } else {
      mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
      currentIndexAlices++;
    }

    currentIndexMerged++;
  }

  return mergedArray;
}

// Tests

let desc = 'both arrays are empty';
let actual = mergeArrays([], []);
let expected = [];
assertDeepEqual(actual, expected, desc);

desc = 'first array is empty';
actual = mergeArrays([], [1, 2, 3]);
expected = [1, 2, 3];
assertDeepEqual(actual, expected, desc);

desc = 'second array is empty';
actual = mergeArrays([5, 6, 7], []);
expected = [5, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'both arrays have some numbers';
actual = mergeArrays([2, 4, 6], [1, 3, 7]);
expected = [1, 2, 3, 4, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'arrays are different lengths';
actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}