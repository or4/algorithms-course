import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Identity extends React.PureComponent<Props, State> {
  render() {
    const obj = {};
    return (
      <div>
        <h3>R.identity</h3>
        <h5>Case 1</h5>
        <div>{`R.identity(1) = ${R.identity(1)}`}</div>
        <h5>Case 2</h5>
        <div>{`const obj = {};`}</div>
        <div>{`R.identity(obj) === obj is ${String(R.identity(obj) === obj)}`}</div>
      </div>
    );
  }
}
