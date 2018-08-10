import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Curry extends React.PureComponent<Props, State> {
  render() {
    const test1Curry = () => {
      const addFourNumbers = (a: number, b: number, c: number, d: number) => a + b + c + d;

      const curriedAddFourNumbers = R.curry(addFourNumbers);
      const f = curriedAddFourNumbers(1, 2);
      const g = f(3);

      console.log('test1Curry g(4)', g(4));
    };
    test1Curry();

    const test2CurryN = () => {
      const sumArgs = (...args: number[]) => R.sum(args);

      let curriedAddFourNumbers = R.curryN(2, sumArgs);
      let f = curriedAddFourNumbers(1);
      console.log('test2CurryN f(2, 3, 4)', f(2, 3, 4));
    };
    test2CurryN();

    const addFour = (a: number) => (b: number) => (c: number) => (d: number) => a + b + c + d;
    const uncurriedAddFour = R.uncurryN(4, addFour);

    return (
      <div>
        <h3>R.curry</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>

        <h3>R.uncurryN</h3>
        <div>{`const addFour = (a: number) => (b: number) => (c: number) => (d: number) => a + b + c + d;`}</div>
        <div>{`const uncurriedAddFour = R.uncurryN(4, addFour);`}</div>
        <div>{`uncurriedAddFour(1, 2, 3, 4) = ${uncurriedAddFour(1, 2, 3, 4)}`}</div>
      </div>
    );
  }
}
