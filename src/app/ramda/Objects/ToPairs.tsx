import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class ToPairs extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.toPairs</h3>
        <div>{`R.toPairs({ a: 1, b: 2, c: 3 }) = ${objToString(R.toPairs({ a: 1, b: 2, c: 3 }))}`}</div>
        <div>{`R.toPairs([1, 2, 3]) = ${objToString(R.toPairs([1, 2, 3]))}`}</div>
        <h3>R.toPairsIn</h3>
        <h5>Converts an object into an array of key, value arrays. The object's own properties and prototype properties are used.</h5>
      </div>
    );
  }
}
