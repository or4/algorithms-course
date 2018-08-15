import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Juxt extends React.PureComponent<Props, State> {
  render() {
    const getRange = R.juxt([Math.min, Math.max]);
    const getTripleArray = R.juxt([R.map(R.identity), R.map((i: number) => i * 2), R.map((i: number) => i * 3)]);

    return (
      <div>
        <h3>R.juxt</h3>
        <h5>Case 1</h5>
        <div>{`const getRange = R.juxt([Math.min, Math.max])`}</div>
        <div>{`getRange(3, 4, 9, -3) = ${getRange(3, 4, 9, -3)}`}</div>

        <h5>Case 2</h5>
        <div>{`const getTripleArray = R.juxt([R.map(R.identity), R.map((i: number) => i * 2), R.map((i: number) => i * 3)]);`}</div>
        <div>{`getTripleArray([1, 2, 3]) = ${objToString(getTripleArray([1, 2, 3]))}`}</div>
      </div>
    );
  }
}
