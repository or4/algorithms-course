import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Insert extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.insert</h3>
        <div>{`R.insert(0, 777, [1, 2, 3, 4]) = ${objToString(R.insert(0, 777, [1, 2, 3, 4]))}`}</div>
        <h3>R.insertAll</h3>
        <div>{`R.insertAll(0, [9, 8, 7], [1, 2, 3, 4]) = ${objToString(R.insertAll(0, [9, 8, 7], [1, 2, 3, 4]))}`}</div>
      </div>
    );
  }
}
