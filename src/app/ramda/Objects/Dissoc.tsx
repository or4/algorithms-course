import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Dissoc extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.dissoc</h3>
        <h5>Returns a new object that does not contain a prop property.</h5>
        <h5>there is a shallow copy of object and then doing `delete` operator</h5>
        <div>{`R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}) = ${objToString(R.dissoc('b', { a: 1, b: 2, c: 3 }))}`}</div>

        <h3>R.dissocPath</h3>
        <div>{`R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}) = ${objToString(R.dissocPath(['a', 'b', 'c'], { a: { b: { c: 42 }}}))}`}</div>
        <div>{`R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42, d: 1}}}) = ${objToString(R.dissocPath(['a', 'b', 'c'], { a: { b: { c: 42, d: 1 }}}))}`}</div>

      </div>
    );
  }
}
