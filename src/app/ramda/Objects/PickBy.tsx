import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class PickBy extends React.PureComponent<Props, State> {
  render() {
    // let isUpperCase = (val, key) => key.toUpperCase() === key;
    // R.pickBy(isUpperCase, { a: 1, b: 2, A: 3, B: 4 }); //=> {A: 3, B: 4}

    return (
      <div>
        <h3>R.pickBy</h3>
        <h5>Returns a partial copy of an object containing only the keys that satisfy the supplied predicate.</h5>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
