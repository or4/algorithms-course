import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class IndexOf extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.indexOf</h3>
        <div>{`R.indexOf(3, [1, 2, 3, 4]) = ${objToString(R.indexOf(3, [1, 2, 3, 4]))}`}</div>
        <div>{`R.indexOf(10, [1, 2, 3, 4]) = ${objToString(R.indexOf(10, [1, 2, 3, 4]))}`}</div>

        <h3>R.lastIndexOf</h3>
        <div>{`R.lastIndexOf(3, [-1, 3, 3, 0, 1, 2, 3, 4]) = ${objToString(R.lastIndexOf(3, [-1, 3, 3, 0, 1, 2, 3, 4]))}`}</div>
        <div>{`R.lastIndexOf(10, [1, 2, 3, 4]) = ${objToString(R.lastIndexOf(10, [1, 2, 3, 4]))}`}</div>
      </div>
    );
  }
}
