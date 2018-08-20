import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class None extends React.PureComponent<Props, State> {
  render() {
    let isEven = (n: number) => n % 2 === 0;
    let isOdd = (n: number) => n % 2 === 1;

    R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
    R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false

    return (
      <div>
        <h3>R.none</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
