import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Or extends React.PureComponent<Props, State> {
  render() {

    return (
      <div>
        <h3>R.or</h3>
        <div>{`R.or(true, true) = ${R.or(true, true)}`}</div>
        <div>{`R.or(true, false) = ${R.or(true, false)}`}</div>
        <div>{`R.or(false, true) = ${R.or(false, true)}`}</div>
        <div>{`R.or(false, false) = ${R.or(false, false)}`}</div>
      </div>
    );
  }
}
