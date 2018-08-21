import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Last extends React.PureComponent<Props, State> {
  render() {
    R.last(['fi', 'fo', 'fum']); //=> 'fum'
    R.last([]); //=> undefined

    R.last('abc'); //=> 'c'
    R.last(''); //=> ''

    return (
      <div>
        <h3>R.last</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}