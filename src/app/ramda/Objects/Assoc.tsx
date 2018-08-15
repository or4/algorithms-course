import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Assoc extends React.PureComponent<Props, State> {
  render() {

    return (
      <div>
        <h3>R.assoc</h3>
        <h5>Makes a shallow clone of an object, setting or overriding the specified property with the given value</h5>
        <div>{`R.assoc('c', 3, {a: 1, b: 2}) = ${objToString(R.assoc('c', 3, { a: 1, b: 2 }))}`}</div>

        <h3>R.assocPath</h3>
        <div>{`R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}) = ${objToString(R.assocPath(['a', 'b', 'c'], 42, { a: { b: { c: 0 }}}))}`}</div>
        <div>{`R.assocPath(['a', 'b', 'c'], 42, {a: 5}) = ${objToString(R.assocPath(['a', 'b', 'c'], 42, { a: 5 }))}`}</div>
        <div>{`R.assocPath(['a', 'b', 'c'], 42, {}) = ${objToString(R.assocPath(['a', 'b', 'c'], 42, {}))}`}</div>
        <div>{`R.assocPath(['a', 'b', 'c'], 42, null) = ${objToString(R.assocPath(['a', 'b', 'c'], 42, null as any))}`}</div>
      </div>
    );
  }
}
