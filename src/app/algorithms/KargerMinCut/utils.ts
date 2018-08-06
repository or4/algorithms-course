export const getRandomInteger = (max: number) => {
  const koef = Math.random();
  return koef * max >> 0;
};