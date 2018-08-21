import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Intersection extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.intersection</h3>
        <div>{` R.intersection([1, 2, 3, 4], [7, 6, 5, 4, 3]) = ${objToString(R.intersection([1, 2, 3, 4], [7, 6, 5, 4, 3]))}`}</div>
      </div>
    );
  }
}
