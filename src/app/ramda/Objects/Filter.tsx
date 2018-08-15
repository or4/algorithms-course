import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Filter extends React.PureComponent<Props, State> {
  render() {
    const isEven = (n: number) => n % 2 === 0;

    R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
    R.filter(isEven, { a: 1, b: 2, c: 3, d: 4 });

    return (
      <div>
        <h3>R.filter</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
        <h3>R.pickBy</h3>
      </div>
    );
  }
}
