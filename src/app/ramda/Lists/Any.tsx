import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Any extends React.PureComponent<Props, State> {
  render() {
    const lessThan0 = R.flip(R.lt)(0);
    const lessThan2 = R.flip(R.lt)(2);
    const equals3 = R.equals(3);
    return (

      <div>
        <h3>R.any</h3>
        <h5>Case 1</h5>
        <div>{`const lessThan0 = R.flip(R.lt)(0);`}</div>
        <div>{`const lessThan2 = R.flip(R.lt)(2);`}</div>
        <div>{`R.any(lessThan0)([1, 2]) = ${objToString(R.any(lessThan0)([1, 2]))}`}</div>
        <div>{`R.any(lessThan2)([1, 2]) = ${objToString(R.any(lessThan2)([1, 2]))}`}</div>
        <h5>Case 2</h5>
        <div>{`const equals3 = R.equals(3);`}</div>
        <div>{`R.any(equals3, [1, 2, 3, 4, 5]) = ${objToString(R.any(equals3, [1, 2, 3, 4, 5]))}`}</div>
        <div>{`R.any(equals3, [1, 2, 4, 5]) = ${objToString(R.any(equals3, [1, 2, 4, 5]))}`}</div>
      </div>
    );
  }
}
