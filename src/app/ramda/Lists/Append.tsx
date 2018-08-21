import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Append extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.append</h3>
        <h5>Returns a new list containing the contents of the given list, followed by the given element.</h5>
        <div>{`R.append('tests', ['write', 'more']) = ${objToString(R.append('tests', ['write', 'more']))}`}</div>
        <div>{`R.append('tests', []) = ${objToString(R.append('tests', []))}`}</div>
        <div>{`R.append(['tests'], ['write', 'more'] as any) = ${objToString(R.append(['tests'], ['write', 'more'] as any))}`}</div>
        <h5>As it turned out, there is string transform to array</h5>
        <div>{`R.append('element', 'some list' as any) = ${objToString(R.append('element', 'some list' as any))}`}</div>
      </div>
    );
  }
}
