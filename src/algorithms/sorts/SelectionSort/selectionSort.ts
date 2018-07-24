// Find min item, remove from origin array, push to sorted and so on..
// O(n^2)
export const selectionSort = (arr: number[]) => {
  const sortedArray = [];
  const inArray = [...arr];

  while (inArray.length) {
    let minValue = inArray[0];
    for (let i = 0; i < inArray.length; i++) {
      if (minValue > inArray[i]) {
        minValue = inArray[i];
      }
    }
    sortedArray.push(minValue);
    inArray.splice(inArray.indexOf(minValue), 1);
  }

  return sortedArray;
};
