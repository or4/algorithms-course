import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class TakeLast extends React.PureComponent<Props, State> {
  render() {
    R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
    R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
    R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
    R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
    R.takeLast(3, 'ramda');               //=> 'mda'

    return (
      <div>
        <h3>R.takeLast</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
