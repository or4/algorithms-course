export const getMediana = (arr: string[], start: number, end: number) => {
  const leftValue = arr[start];
  const middleValue = arr[Math.floor((end - start) / 2) + start];
  const rightValue = arr[end];
  const threeValues = [leftValue, middleValue, rightValue].sort((a: string, b: string) => Number(a) - Number(b));
  // console.log('middleValue', middleValue);
  // console.log('threeValues', String(threeValues));
  return threeValues[1];
};

export const medianaTests = () => {

  console.log('**** MEDIANA TESTS');
  let arr =  [2, 20, 1, 15, 3, 11, 13, 6, 16, 10, 19, 5, 4, 9, 8, 14, 18, 17, 7, 12];
  // left = 2, right = 12, middle = 10, mediana = 10, count = 19
  console.log('mediana', getMediana(arr.map(item => String(item)), 0, arr.length - 1));

  arr = [7, 1, 3, 6, 2, 5, 4, 9, 8];
  // left = 7, right = 8, middle = 2, mediana = 7, count = 8
  console.log('mediana', getMediana(arr.map(item => String(item)), 0, arr.length - 1));

  arr = [4, 1, 3, 6, 2, 5];
  // left = 4, right = 5, middle = 3, mediana = 4, count = 5
  console.log('mediana', getMediana(arr.map(item => String(item)), 0, arr.length - 1));

  arr = [2, 1, 3];
  // left = 2, right = 3, middle = 1, mediana = 2, count = 2
  console.log('mediana', getMediana(arr.map(item => String(item)), 0, arr.length - 1));

  arr = [6, 5];
  // left = 6, right = 5, middle = 6, mediana = 6, count = 1
  console.log('mediana', getMediana(arr.map(item => String(item)), 0, arr.length - 1));

  arr = [9, 8];
  // left = 9, right = 8, middle = 9, mediana = 9, count = 1
  console.log('mediana', getMediana(arr.map(item => String(item)), 0, arr.length - 1));


  arr = [19, 11, 13, 15, 16, 14, 18, 17, 20, 12];
  // left = 19, right = 12, middle = 16, mediana = 16, count = 9
  console.log('mediana', getMediana(arr.map(item => String(item)), 0, arr.length - 1));

  arr = [12, 11, 13, 15, 14];
  // left = 12, right = 14, middle = 13, mediana = 13, count = 4
  console.log('mediana', getMediana(arr.map(item => String(item)), 0, arr.length - 1));

  arr = [12, 11];
  // left = 12, right = 11, middle = 12, mediana = 12, count = 1
  console.log('mediana', getMediana(arr.map(item => String(item)), 0, arr.length - 1));

  arr = [15, 14];
  // left = 15, right = 14, middle = 15, mediana = 15, count = 1
  console.log('mediana', getMediana(arr.map(item => String(item)), 0, arr.length - 1));

  arr = [18, 17, 20, 19];
  // left = 18, right = 19, middle = 17, mediana = 18, count = 3
  console.log('mediana', getMediana(arr.map(item => String(item)), 0, arr.length - 1));

  arr = [20, 19];
  // left = 20, right = 19, middle = 20, mediana = 20, count = 1
  console.log('mediana', getMediana(arr.map(item => String(item)), 0, arr.length - 1));

  // sorted array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  // total count: 55

  console.log('**** MEDIANA TESTS');
};