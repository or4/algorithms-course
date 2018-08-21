import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class All extends React.PureComponent<Props, State> {
  render() {
    const equals3 = R.equals(3);

    return (
      <div>
        <h3>R.all</h3>
        <div>{`const equals3 = R.equals(3);`}</div>
        <div>{`R.all(equals3)([3, 3, 3, 3]) = ${objToString(R.all(equals3)([3, 3, 3, 3]))}`}</div>
        <div>{`R.all(equals3)([3, 3, 1, 3]) = ${objToString(R.all(equals3)([3, 3, 1, 3]))}`}</div>
      </div>
    );
  }
}
