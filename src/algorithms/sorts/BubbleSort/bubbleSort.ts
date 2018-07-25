export const bubbleSort = (arr: number[]): number[] => {
  const sorted = [...arr];
  let counterSwap = 0;
  let counterCycles = 0;

  for (let i = 0; i < arr.length; i++) {
    // for (let j = 0; j < arr.length; j++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sorted[i] > sorted[j]) {
        const tmp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = tmp;
        counterSwap++;
      }
      counterCycles++;
    }
  }

  console.log('arr.length', arr.length);
  console.log('counterSwap', counterSwap);
  console.log('counterCycles', counterCycles);

  return sorted;
};
