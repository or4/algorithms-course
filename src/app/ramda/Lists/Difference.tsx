import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Difference extends React.PureComponent<Props, State> {
  render() {
    R.difference([1, 2, 3, 4], [7, 6, 5, 4, 3]); //=> [1,2]
    R.difference([7, 6, 5, 4, 3], [1, 2, 3, 4]); //=> [7,6,5]
    // R.difference([{ a: 1 }, { b: 2 }], [{ a: 1 }, { c: 3 }]); //=> [{b: 2}]

    return (
      <div>
        <h3>R.difference</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
