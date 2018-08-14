import React from 'react';
import * as R from 'ramda';

type TProps = {
};
type State = {
};

export class Props extends React.PureComponent<TProps, State> {
  render() {
    return (
      <div>
        <h3>R.props</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
      </div>
    );
  }
}
