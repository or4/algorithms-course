// Find min item, remove from origin array, push to sorted and so on..
// O(n^2)

const getMinValue = (arr: number[]) => {
  let minValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (minValue > arr[i]) {
      minValue = arr[i];
    }
  }
  return minValue;
};

export const selectionSort = (arr: number[]) => {
  const sortedArray = [];
  const inArray = [...arr];

  while (inArray.length) {
    const minValue = getMinValue(inArray);

    sortedArray.push(minValue);

    inArray.splice(inArray.indexOf(minValue), 1);
  }

  return sortedArray;
};
