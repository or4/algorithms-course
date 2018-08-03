export const swap = (arr: any[], item1: any, item2: any) => {
  const index1 = arr.indexOf(item1);
  const index2 = arr.indexOf(item2);
  const tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
  return arr;
};

export const overflowStopper = {
  count: 0,
  max: 50,
};