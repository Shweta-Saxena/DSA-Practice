const arr = [2, 5, 1, 3, 0];

function largestElement(arr) {
  let max = 0;
  let min = Infinity;
  for (let i = 0; i <= arr?.length - 1; i++) {
    if (max < arr[i]) {
      max = arr[i];
    };
    if(min >= arr[i]){
        min = arr[i]
    }
  }
  return {max, min};
}

console.log(largestElement(arr));
