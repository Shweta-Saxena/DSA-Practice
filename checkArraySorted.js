const arr = [1, 2, 3, 7, 4, 9,5,8];

function checkArraySorted(arr) {
  let arrayStatus = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      arrayStatus = false;
    }
  }
  return arrayStatus;
}

console.log(checkArraySorted(arr));
