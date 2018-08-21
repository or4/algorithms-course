import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Adjust extends React.PureComponent<Props, State> {
  render() {

    return (
      <div>
        <h3>R.adjust</h3>
        <div>{`R.adjust(R.add(10), 1, [1, 2, 3]) = ${objToString(R.adjust(R.add(10), 1, [1, 2, 3]))}`}</div>
        <div>{`R.adjust(R.add(3), 2, [1, 2, 3]) = ${objToString(R.adjust(R.add(3), 2, [1, 2, 3]))}`}</div>
        <div>{`R.adjust(R.multiply(3), 2, [1, 2, 3]) = ${objToString(R.adjust(R.multiply(3), 2, [1, 2, 3]))}`}</div>
        <div>{`R.adjust(R.add(3), 3, [1, 2, 3]) = ${objToString(R.adjust(R.add(3), 3, [1, 2, 3]))}`}</div>
      </div>
    );
  }
}
