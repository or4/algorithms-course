import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Contains extends React.PureComponent<Props, State> {
  render() {

    return (
      <div>
        <h3>R.contains</h3>
        <div>{`R.contains(3, [1, 2, 3]) = ${objToString(R.contains(3, [1, 2, 3]))}`}</div>
        <div>{`R.contains('3', [1, 2, 3] as any) = ${objToString(R.contains('3', [1, 2, 3] as any))}`}</div>
        <div>{`R.contains(4, [1, 2, 3]) = ${objToString(R.contains(4, [1, 2, 3]))}`}</div>
        <div>{`R.contains({ name: 'Fred' }, [{ name: 'Fred' }]) = ${objToString(R.contains({ name: 'Fred' }, [{ name: 'Fred' }]))}`}</div>
        <div>{`R.contains([42], [[42]]) = ${objToString(R.contains([42], [[42]]))}`}</div>
      </div>
    );
  }
}
