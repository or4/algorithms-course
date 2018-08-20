import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class DropLast extends React.PureComponent<Props, State> {
  render() {
    R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
    R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
    R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
    R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
    R.dropLast(3, 'ramda');               //=> 'ra'

    return (
      <div>
        <h3>R.dropLast</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
