import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Keys extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.keys</h3>
        <div>{`R.keys({ a: 1, b: 2, c: 3 }) = ${objToString(R.keys({ a: 1, b: 2, c: 3 }))}`}</div>
        <div>{`R.keys([1, 2, 3, 4]) = ${objToString(R.keys([1, 2, 3, 4]))}`}</div>
      </div>
    );
  }
}
