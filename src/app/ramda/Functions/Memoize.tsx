import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Memoize extends React.PureComponent<Props, State> {
  render() {
    let count = 0;
    const factorial = R.memoize(n => {
      count += 1;
      return R.product(R.range(1, n + 1));
    });

    let countN = 0;
    const factorialN = R.memoizeWith(
      // (n) => { console.log('memoizeWith', n); return n + '123' },
      (n) => { console.log('memoizeWith', n); return '123' }, // n is a key, and if we always return one key, we get one first value
      n => {
        countN += 1;
        return R.product(R.range(1, n + 1));
      }
    );


    return (
      <div>
        <h3>R.memoize</h3>
        <div>{`let count = 0;`}</div>
        <div>{`const factorial = R.memoize(n => { count += 1; return R.product(R.range(1, n + 1)) });`}</div>
        <div>{`factorial(5) = ${factorial(5)}`}</div>
        <div>{`factorial(5) = ${factorial(5)}`}</div>
        <div>{`factorial(5) = ${factorial(5)}`}</div>
        <div>{`factorial(10) = ${factorial(10)}`}</div>
        <div>{`factorial(10) = ${factorial(10)}`}</div>
        <div>{`factorial(10) = ${factorial(10)}`}</div>
        <div>{`count = ${count}`}</div>

        <h3>R.memoizeWith</h3>
        <h5>In function arg is a key, and if we always return one key, we get one first value</h5>
        <div>{`let countN = 0;`}</div>
        <div>{`R.memoizeWith(n => '123', n => { countN += 1; return R.product(R.range(1, n + 1)) })`}</div>
        <div>{`factorialN(5) = ${factorialN(5)}`}</div>
        <div>{`factorialN(5) = ${factorialN(5)}`}</div>
        <div>{`factorialN(5) = ${factorialN(5)}`}</div>
        <div>{`factorialN(10) = ${factorialN(10)}`}</div>
        <div>{`factorialN(10) = ${factorialN(10)}`}</div>
        <div>{`factorialN(10) = ${factorialN(10)}`}</div>
        <div>{`countN = ${countN}`}</div>
      </div>
    );
  }
}
