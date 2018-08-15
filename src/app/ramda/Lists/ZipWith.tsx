import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class ZipWith extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.zipWith</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
