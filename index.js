let findMinAndRemoveSorted = (array) => {
  const smallest = array[0];
  return array.shift();
}

let merge = (array1, array2) => {
  let sorted = [];
  let currentMin;
  while(array1.length != 0 && array2.length != 0) {
    let firstMin = findMinAndRemoveSorted(array1);
    let secondMin = findMinAndRemoveSorted(array2);
    if (firstMin < secondMin) {
      sorted.push(firstMin, secondMin)
    } else {
      sorted.push(secondMin, firstMin)
    }
  }
  return sorted
}
