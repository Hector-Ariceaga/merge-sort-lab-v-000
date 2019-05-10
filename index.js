let findMinAndRemoveSorted = (array1, array2) => {
  let firstMin = array1[0];
  let secondMin = array2[0];

  firstMin < secondMin ? array1.shift() : array2.shift()
}

let merge = (array1, array2) => {
  let sorted = [];
  let currentMin;
  while(array1.length != 0 && array2.length != 0) {
    let firstMin = findMinAndRemoveSorted(array1);
    let lastMin = findMinAndRemoveSorted(array2);
    if (firstMin < lastMin) {
      sorted.push(firstMin, lastMin)
    } else {
      sorted.push(lastMin, firstMin)
    }
  }
  return sorted
}
