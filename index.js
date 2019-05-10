let findMinAndRemoveSorted = (array) => {
  return array.shift();
}

let merge = (array1, array2) => {
  let sorted = [];
  let currentMin;
  while(array1.length != 0 && array2.length != 0) {
    let firstMin = findMinAndRemoveSorted(array1);

    if (firstMin < secondMin) {
      sorted.push(firstMin)
    } else {
      sorted.push(secondMin)
    }
  }
  return sorted
}
