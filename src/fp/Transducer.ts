const filter = (predicate: Function) => (reducer: Function) => {
  return (accumulator: Array<number>, value: number) => {
    if (predicate(value)) {
      return reducer(accumulator, value);
    }
    return accumulator;
  };
};

const map = (transformer: Function) => (reducer: Function) => {
  return (accumulator: Array<number>, value: number) => {
    return reducer(accumulator, transformer(value));
  };
};

const finalReducer = (acc: Array<number>, val: number) => {
  acc.push(val);
  return acc;
};

const evenPredicate = (x: number) => x % 2 === 0;
const doubleTransformer = (x: number) => x * 2;

const filterEven = filter(evenPredicate);
const mapDouble = map(doubleTransformer);
// export const simpleVersion = [1, 2, 3, 4, 5, 6].reduce(filterEven(mapDouble(finalReducer)), []);
// console.log(simpleVersion);


const compose = (...fns: Array<any>) => [...fns].reduceRight((i, f) => f(i), finalReducer);
export const result = [1, 2, 3, 4, 5, 6].reduce(compose(filterEven, mapDouble), []);
console.log(result);