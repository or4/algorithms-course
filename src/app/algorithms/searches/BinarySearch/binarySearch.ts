// time efficiency is O(log(n))
export const binarySearch = (sortedArray: number[], value: number): number => {
  let from = 0;
  let to = sortedArray.length - 1;

  while (from <= to) {
    const currentIndex = Math.floor((from + to) / 2);
    if (value === sortedArray[currentIndex]) {
      return currentIndex + 1;
    } else if (value < sortedArray[currentIndex]) {
      to = currentIndex - 1;
    } else {
      from = currentIndex + 1;
    }
  }
  return -1;
};
