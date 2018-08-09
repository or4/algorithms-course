import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class IfElse extends React.PureComponent<Props, State> {
  render() {

    return (
      <div>
        <h3>IfElse</h3>
        <div>{`R.equals(1, 1) = ${R.equals(1, 1)}`}</div>
        <h3>cond</h3>
        <h3>unless</h3>
        <h3>when</h3>
      </div>
    );
  }
}
