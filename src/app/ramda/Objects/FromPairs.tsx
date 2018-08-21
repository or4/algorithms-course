import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class FromPairs extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.fromPairs</h3>
        <h5>Creates a new object from a list key-value pairs. If a key appears in multiple pairs, the rightmost pair is included in the object.</h5>
        <div>{`R.fromPairs([['a', 1], ['b', 2], ['c', 3]]) = ${objToString(R.fromPairs([['a', 1], ['b', 2], ['c', 3]]))}`}</div>

        <h5>Case 2. Remove keys with nil values</h5>
        <div>{`R.pipe(R.toPairs, R.reject((item: any) => R.isNil(item[1])), R.fromPairs)({ a: 1, b: null, c: null, d: 4 }) = ${objToString(R.pipe(R.toPairs, R.reject((item: any) => R.isNil(item[1])), R.fromPairs)({ a: 1, b: null, c: null, d: 4 }))}`}</div>


        <h3>R.toPairs</h3>
        <div>{`R.toPairs({ a: 1, b: 2, c: 3 }) = ${objToString(R.toPairs({ a: 1, b: 2, c: 3 }))}`}</div>
        <div>{`R.toPairs([1, 2, 3]) = ${objToString(R.toPairs([1, 2, 3]))}`}</div>
        <h3>R.toPairsIn</h3>
        <h5>Converts an object into an array of key, value arrays. The object's own properties and prototype properties are used.</h5>

      </div>
    );
  }
}
