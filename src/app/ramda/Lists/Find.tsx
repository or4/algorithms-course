import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Find extends React.PureComponent<Props, State> {
  render() {
    let xs = [{ a: 1 }, { a: 2 }, { a: 3 }];
    R.find(R.propEq('a', 2))(xs); //=> {a: 2}
    R.find(R.propEq('a', 4))(xs); //=> undefined

    return (
      <div>
        <h3>R.find</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
