import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class FromPairs extends React.PureComponent<Props, State> {
  render() {
    R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
    return (
      <div>
        <h3>R.fromPairs</h3>
        <h5>Creates a new object from a list key-value pairs. If a key appears in multiple pairs, the rightmost pair is included in the object.</h5>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
