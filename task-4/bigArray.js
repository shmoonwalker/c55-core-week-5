// you can use this function to generate a big array of the specified size
// It contains numbers from 0 to size - 1
// Example: generateBigArray(5) will return [0, 1, 2, 3, 4]
export function generateBigArray(size) {
  const array = new Array(size);
  for (let i = 0; i < size; i++) {
    array[i] = i;
  }
  return array;
};

export default generateBigArray;