import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class FindLast extends React.PureComponent<Props, State> {
  render() {
    let xs = [{ a: 1, b: 0 }, { a: 1, b: 1 }];
    R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
    R.findLast(R.propEq('a', 4))(xs); //=> undefined

    return (
      <div>
        <h3>R.findLast</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
