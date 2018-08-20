import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Pick extends React.PureComponent<Props, State> {
  render() {
    const isUpperCase = (val: number, key: string) => key.toUpperCase() === key;

    return (
      <div>
        <h3>R.pick</h3>
        <h5>Returns a partial copy of an object containing only the keys specified. If the key does not exist, the property is ignored.</h5>
        <div>{`R.pick(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }) = ${objToString(R.pick(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }))}`}</div>
        <div>{`R.pick(['a', 'e', 'f'], { a: 1, b: 2, c: 3, d: 4 }) = ${objToString(R.pick(['a', 'e', 'f'], { a: 1, b: 2, c: 3, d: 4 }))}`}</div>

        <h3>R.pickAll</h3>
        <h5>Returns a partial copy of an object containing only the keys that satisfy the supplied predicate.</h5>
        <div>{`R.pickAll(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }) = ${objToString(R.pickAll(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }))}`}</div>
        <div>{`R.pickAll(['a', 'e', 'f'], { a: 1, b: 2, c: 3, d: 4 }) = ${objToString(R.pickAll(['a', 'e', 'f'], { a: 1, b: 2, c: 3, d: 4 }))}`}</div>

        <h3>R.pickBy</h3>
        <h5>Returns a partial copy of an object containing only the keys that satisfy the supplied predicate.</h5>
        <div>{`const isUpperCase = (val: number, key: string) => key.toUpperCase() === key;`}</div>
        <div>{`R.pickBy(isUpperCase, { a: 1, b: 2, A: 3, B: 4 }) = ${objToString(R.pickBy(isUpperCase, { a: 1, b: 2, A: 3, B: 4 }))}`}</div>
      </div>
    );
  }
}
