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

const sizes = [1000, 100000, 10000000];
const target = 123456789;

const bigArray = sizes.map(size => generateBigArray(size));

for (let i = 0; i < sizes.length; i++) {
  console.time(`Linear Search ${sizes[i]}`);
  linearSearch(bigArray[i], target);
  console.timeEnd(`Linear Search ${sizes[i]}`);
}

console.log("---");

for (let i = 0; i < sizes.length; i++) {
  console.time(`Binary Search ${sizes[i]}`);
  binarySearch(bigArray[i], target);
  console.timeEnd(`Binary Search ${sizes[i]}`);
}
