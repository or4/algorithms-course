import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Pluck extends React.PureComponent<Props, State> {
  render() {
    R.pluck('a')([{ a: 1 }, { a: 2 }]); //=> [1, 2]
    R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
    // R.pluck('val', { a: { val: 3 }, b: { val: 5 }}); //=> {a: 3, b: 5}

    return (
      <div>
        <h3>R.pluck</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
