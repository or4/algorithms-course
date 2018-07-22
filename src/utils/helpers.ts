
export const sleep = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const isNumber = (number: string, digits: number = 10): boolean => {
  const replace = `^\\d*\\.?\\d{0,${digits}}$`;
  const re = new RegExp(replace);
  return re.test(number);
};