function reverse(arrayOfChars) {

  // Reverse the input array of characters in place
 let leftIndex = 0,
		rightIndex = arrayOfChars.length - 1;

	while (leftIndex < rightIndex ) {
		let temp = arrayOfChars[leftIndex]; // for storing swap val
		arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
		arrayOfChars[rightIndex] = temp;

		// move towards center
		leftIndex++;
		rightIndex--;
	}

	return arrayOfChars;
