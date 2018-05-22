import * as R from 'ramda';

let sumArgs = (...args: Array<number>) => R.sum(args);

let curriedAddFourNumbers = R.curryN(4, sumArgs);
let f1 = curriedAddFourNumbers(1, 20, 300, 4000, 50000, 600000, 7000000, 80000000);
console.log(f1); // 87654321

let f2 = curriedAddFourNumbers(1, 20);
let g = f2(300);
export let result = g(4000); //=> 4321
console.log(result);

/***************************************************************/

curriedAddFourNumbers = R.curryN(10, sumArgs);
f1 = curriedAddFourNumbers(1, 20, 300, 4000, 50000, 600000, 7000000, 80000000);
console.log(f1); // 87654321

f2 = curriedAddFourNumbers(1, 20);
g = f2(300);
result = g(4000); //=> 4321
console.log(result);

/***************************************************************/

let addFour = (a: any) => (b: any) => (c: any) => (d: any) => a + b + c + d;

let uncurriedAddFour = R.uncurryN(4, addFour);
result = uncurriedAddFour(1, 2, 3, 4); //=> 10
console.log(result);
