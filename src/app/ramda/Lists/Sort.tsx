import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Sort extends React.PureComponent<Props, State> {
  render() {
    let diff = function(a: number, b: number) { return a - b };
    R.sort(diff, [4, 2, 7, 5]); //=> [2, 4, 5, 7]

    return (
      <div>
        <h3>R.sort</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
