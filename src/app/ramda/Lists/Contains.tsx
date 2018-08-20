import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Contains extends React.PureComponent<Props, State> {
  render() {
    R.contains(3, [1, 2, 3]); //=> true
    R.contains(4, [1, 2, 3]); //=> false
    R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
    R.contains([42], [[42]]); //=> true

    return (
      <div>
        <h3>R.contains</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
