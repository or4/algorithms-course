let countOfRecursiveSteps = 0;

function swap(array: string[], a: number, b: number) {
  let tmp = array[a];
  array[a] = array[b];
  array[b] = tmp;
}

function partition(array: string[], lo: number, hi: number) {
  let i = lo;
  let j = hi + 1;

  while (true) {
    while (Number(array[++i]) < Number(array[lo])) {
      if (i === hi) break;
    }

    while (Number(array[--j]) > Number(array[lo])) {
      if (j === lo) break;
    }

    if (Number(i) >= Number(j)) break;

    swap(array, i, j);
  }

  swap(array, lo, j);
  return j;
}

function sort(array: string[], lo: number, hi: number) {
  countOfRecursiveSteps++;

  // console.log(`sort start, lo=${lo}, hi=${hi} array=`, array);

  if (hi <= lo) {
    // console.log(`sort start, EXIT`);
    return;
  }

  let j = partition(array, lo, hi);
  // console.log(`partition, j=${j}, lo=${lo}, hi=${hi} array=`, array);

  sort(array, lo, j - 1);
  sort(array, j + 1, hi);
}

export const quick_sort = function(array: string[]) {
  sort(array, 0, array.length - 1);
  console.log('other: countOfRecursiveSteps', countOfRecursiveSteps);
  return array;
};


function findNth(array: string[], lo: number, hi: number, index: number): string {
  if (hi <= lo) return 'Nothing';

  let j = partition(array, lo, hi);

  if (j === index) return array[j];

  if (j > index) {
    return findNth(array, j, hi, index);
  }

  if (j < index) {
    return findNth(array, lo, j, index);
  }

  return 'Nothing';
}

export const quick_sort_findNth = function(array: string[], index: number) {
  findNth(array, 0, array.length - 1, index);
  return array;
};
