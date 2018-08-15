import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class PickAll extends React.PureComponent<Props, State> {
  render() {
    R.pickAll(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }); //=> {a: 1, d: 4}
    R.pickAll(['a', 'e', 'f'], { a: 1, b: 2, c: 3, d: 4 }); //=> {a: 1, e: undefined, f: undefined}

    return (
      <div>
        <h3>R.pickAll</h3>
        <h5>Returns a partial copy of an object containing only the keys that satisfy the supplied predicate.</h5>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
