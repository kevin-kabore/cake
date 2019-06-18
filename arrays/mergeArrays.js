function mergeArrays(arr1, arr2) {
  let length1 = arr1.length,
    length2 = arr2.length,
    i = 0,
    j = 0,
    result = [];

    while (i < length1 && j < length2) {
      if (arr1[i] < arr2[j]) {
        result.push(arr[i]);
        i++;
      }
      if (arr1[i] > arr2[j]) {
        result.push(arr2[j]);
        j++;
      }
      if(arr1[i] === arr2[j]) {
        result.push(arr1[i], arr[j]);
        i++;
        j++;
      }
    }
    return result.concat(arr1.slice(i), arr2.slice(j))
}
