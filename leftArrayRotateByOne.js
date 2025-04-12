const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 2;

function rotateArray(arr, k, direction) {
  const n = arr.length;
  k = k % n; // Handle k > n

  if (direction === "right") {
    for (let i = 0; i < k; i++) {
      const last = arr.pop(); // Remove last element
      arr.unshift(last); // Insert it at the beginning
    }
  } else if (direction === "left") {
    for (let i = 0; i < k; i++) {
      const first = arr.shift(); // Remove first element
      arr.push(first); // Append it to the end
    }
  } else {
    throw new Error("Invalid direction. Use 'left' or 'right'.");
  }

  return arr;
}

console.log(rotateArray(arr, k,'left'));
