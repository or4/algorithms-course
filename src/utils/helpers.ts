
export const sleep = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const isNumber = (number: string, digits: number = 10): boolean => {
  const replace = `^\\d*\\.?\\d{0,${digits}}$`;
  const re = new RegExp(replace);
  return re.test(number);
};

export const getRandomArray = (amountItems: number = 7) => {
  const arr = [];
  while (arr.length < amountItems) {
    const value = Math.random() * 10 >> 0;
    if (arr.indexOf(value) === -1 && value > 0) {
      arr.push(value);
    }
  }
  return arr;
};

export const covertToStringArr = (arr: number[]) => {
  return arr.map(item => String(item));
};