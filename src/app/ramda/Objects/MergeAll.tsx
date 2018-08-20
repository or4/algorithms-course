import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class MergeAll extends React.PureComponent<Props, State> {
  render() {

    return (
      <div>
        <h3>R.mergeAll</h3>
        <h5>Accept list of objects</h5>
        <div>{`R.mergeAll([{ foo: 1 }, { bar: 2 }, { baz: 3 }]) = ${objToString(R.mergeAll([{ foo: 1 }, { bar: 2 }, { baz: 3 }]))}`}</div>
        <div>{`R.mergeAll([{ foo: 1 }, { foo: 2 }, { bar: 2 }]) = ${objToString(R.mergeAll([{ foo: 1 }, { foo: 2 }, { bar: 2 }]))}`}</div>
      </div>
    );
  }
}
