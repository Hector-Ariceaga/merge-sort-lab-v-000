let findMinAndRemoveSorted = (array) => {
  return array.shift();
}

let merge = (firstArray, secondArray) => {
  let sorted = [];
  while(firstArray.length != 0 && secondArray.length != 0) {
    if (firstArray[0] < secondArray[0]) {
      sorted.push(findMinAndRemoveSorted(firstArray))
    } else {
      sorted.push(findMinAndRemoveSorted(secondArray))
    }
  }
  return sorted
}
