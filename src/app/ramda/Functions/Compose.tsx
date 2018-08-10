import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Compose extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>Compose</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
      </div>
    );
  }
}
