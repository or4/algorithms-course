import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Complement extends React.PureComponent<Props, State> {
  render() {

    return (
      <div>
        <h3>Complement</h3>
        <div>{`R.equals(1, 1) = ${R.equals(1, 1)}`}</div>
      </div>
    );
  }
}
