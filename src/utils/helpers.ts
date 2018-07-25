
export const sleep = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const isNumber = (number: string, digits: number = 10): boolean => {
  const replace = `^\\d*\\.?\\d{0,${digits}}$`;
  const re = new RegExp(replace);
  return re.test(number);
};

export const getRandomNumberArray = (amountItems: number = 7): number[] => {
  const arr = [];
  while (arr.length < amountItems) {
    const value = Math.random() * 10 >> 0;
    if (arr.indexOf(value) === -1 && value > 0) {
      arr.push(value);
    }
  }
  return arr;
};

export const getRandomStringArray = (amountItems: number = 7): string[] => {
  const arr = [];
  while (arr.length < amountItems) {
    const value = Math.random() * 10 >> 0;
    const valueString = String(value);
    if (arr.indexOf(valueString) === -1 && value > 0) {
      arr.push(valueString);
    }
  }
  return arr;
};
