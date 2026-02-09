import { generateBigArray } from "./bigArray.js";

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

const binarySearch = (arr, target) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const mid = min + Math.floor((max - min) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return -1;
};

const bigArray = generateBigArray(1000000);

console.time("Linear Search");
linearSearch(bigArray, 999999);
console.timeEnd("Linear Search");

console.time("Binary Search");
binarySearch(bigArray, 999999);
console.timeEnd("Binary Search");
