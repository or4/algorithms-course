import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Omit extends React.PureComponent<Props, State> {
  render() {
    R.omit(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }); //=> {b: 2, c: 3}
    return (
      <div>
        <h3>R.omit</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
