import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Omit extends React.PureComponent<Props, State> {
  render() {

    return (
      <div>
        <h3>R.omit</h3>
        <div>{`R.omit(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }) = ${objToString(R.omit(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }))}`}</div>
      </div>
    );
  }
}
