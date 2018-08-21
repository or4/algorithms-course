import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Length extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.length</h3>
        <div>{`R.length([]) = ${objToString(R.length([]))}`}</div>
        <div>{`R.length([1, 2, 3]) = ${objToString(R.length([1, 2, 3]))}`}</div>
      </div>
    );
  }
}
