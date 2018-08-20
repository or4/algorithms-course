import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Reject extends React.PureComponent<Props, State> {
  render() {
    let isOdd = (n: number) => n % 2 === 1;

    R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]

    R.reject(isOdd, { a: 1, b: 2, c: 3, d: 4 }); //=> {b: 2, d: 4}

    return (
      <div>
        <h3>R.reject</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
