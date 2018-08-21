import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Find extends React.PureComponent<Props, State> {
  render() {
    const xs = [{ a: 1 }, { a: 2 }, { a: 3 }];
    return (
      <div>
        <h3>R.find</h3>
        <div>{`R.find(R.propEq('a', 2))(xs) = ${objToString(R.find(R.propEq('a', 2))(xs))}`}</div>
        <div>{`R.find(R.propEq('a', 4))(xs) = ${objToString(R.find(R.propEq('a', 4))(xs))}`}</div>
      </div>
    );
  }
}
