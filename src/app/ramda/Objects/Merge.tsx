import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Merge extends React.PureComponent<Props, State> {
  render() {
    const resetToDefault = R.merge(R.nthArg(0), { x: 0 });

    return (
      <div>
        <h3>R.merge</h3>
        <h5>Accept two objects</h5>
        <h5>Case 1</h5>
        <div>{`R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 }) = ${objToString(R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 }))}`}</div>

        <h5>Case 2</h5>
        <div>{`const resetToDefault = R.merge(R.nthArg(0), { x: 0 });`}</div>
        <div>{`resetToDefault({ x: 5, y: 2 }) = ${objToString(resetToDefault({ x: 5, y: 2 }))}`}</div>
      </div>
    );
  }
}
