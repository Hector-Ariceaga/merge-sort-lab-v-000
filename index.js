let findMinAndRemoveSorted = (array) => {
  const smallest = array[0];
  array.shift();
  return smallest;
}

let merge = (array1, array2) => {
  let sorted = [];
  let currentMin;
  while(array1.length != 0 && array2.length != 0) {
    if (findMinAndRemoveSorted(array1) > findMinAndRemoveSorted(array2)) {
      currentMin = findMinAndRemoveSorted(array1)
    } else {
      currentMin = findMinAndRemoveSorted(array2)
    }
    sorted.push(currentMin)
  }
  return sorted
}
