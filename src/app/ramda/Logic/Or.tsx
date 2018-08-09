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
        <h3>Or</h3>
        <div>{`R.equals(1, 1) = ${R.equals(1, 1)}`}</div>
      </div>
    );
  }
}
