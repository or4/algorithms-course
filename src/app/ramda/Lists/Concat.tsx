import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Concat extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.concat</h3>
        <div>{`R.concat('ABC', 'DEF') = ${objToString(R.concat('ABC', 'DEF'))}`}</div>
        <div>{`R.concat([4, 5, 6], [1, 2, 3]) = ${objToString(R.concat([4, 5, 6], [1, 2, 3]))}`}</div>
        <div>{`R.concat([], []) = ${objToString(R.concat([], []))}`}</div>
      </div>
    );
  }
}
