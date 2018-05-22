import * as R from 'ramda';

// Performs right-to-left function composition. The rightmost function may have any arity; the remaining functions must be unary.
// Note: The result of compose is not automatically curried.

let classyGreeting = (firstName: string) => `The name's  ${firstName}`;

let yellGreeting = R.compose(R.toUpper, classyGreeting);
export let result = yellGreeting('James'); //=> "THE NAME'S JAMES"
console.log(result);

let yellGreeting2 = R.compose(classyGreeting, R.toUpper);
export let result2 = yellGreeting2('James'); //=> "The name's JAMES"
console.log(result2);


let result4 = R.compose(Math.abs, R.add(1), R.multiply(2))(-4); //=> 7
console.log(result4);

/***************************************************************/

