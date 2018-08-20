import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Concat extends React.PureComponent<Props, State> {
  render() {
    R.concat('ABC', 'DEF'); // 'ABCDEF'
    R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
    R.concat([], []); //=> []

    return (
      <div>
        <h3>R.concat</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
