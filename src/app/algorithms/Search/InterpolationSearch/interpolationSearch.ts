// time efficiency is O(log(log(n)))
let counter = 0;
export const interpolationSearch = (sortedArray: number[], value: number): number => {
  counter = 0;
  let from = 0;
  let to = sortedArray.length - 1;

  while (from <= to) {
    const currentIndex = Math.floor(
      (value - sortedArray[from]) * (to - from) / (sortedArray[to] - sortedArray[from]) + from
    );
    counter++;
    if (value === sortedArray[currentIndex]) {
      console.log('done! value', value, 'counter', counter);
      return currentIndex + 1;
    } else if (value < sortedArray[currentIndex]) {
      to = currentIndex - 1;
    } else {
      from = currentIndex + 1;
    }
  }
  return -1;
};
