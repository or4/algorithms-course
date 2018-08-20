import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class FindIndex extends React.PureComponent<Props, State> {
  render() {
    let xs = [{ a: 1 }, { a: 2 }, { a: 3 }];
    R.findIndex(R.propEq('a', 2))(xs); //=> 1
    R.findIndex(R.propEq('a', 4))(xs); //=> -1

    return (
      <div>
        <h3>R.findIndex</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
