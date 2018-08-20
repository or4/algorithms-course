import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Scan extends React.PureComponent<Props, State> {
  render() {
    let numbers = [1, 2, 3, 4];
    let factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]

    return (
      <div>
        <h3>R.scan</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
