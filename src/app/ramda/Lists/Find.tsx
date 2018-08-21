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
    const xs1 = [{ a: 1, b: 0 }, { a: 1, b: 1 }];

    return (
      <div>
        <h3>R.find</h3>
        <div>{`const xs = [{ a: 1 }, { a: 2 }, { a: 3 }];`}</div>
        <div>{`R.find(R.propEq('a', 2))(xs) = ${objToString(R.find(R.propEq('a', 2))(xs))}`}</div>
        <div>{`R.find(R.propEq('a', 4))(xs) = ${objToString(R.find(R.propEq('a', 4))(xs))}`}</div>

        <h3>R.findIndex</h3>
        <div>{`const xs = [{ a: 1 }, { a: 2 }, { a: 3 }];`}</div>
        <div>{`R.findIndex(R.propEq('a', 2))(xs) = ${objToString(R.findIndex(R.propEq('a', 2))(xs))}`}</div>
        <div>{`R.findIndex(R.propEq('a', 4))(xs) = ${objToString(R.findIndex(R.propEq('a', 4))(xs))}`}</div>

        <h3>R.findLast</h3>
        <div>{`const xs1 = [{ a: 1, b: 0 }, { a: 1, b: 1 }];`}</div>
        <div>{`R.findLast(R.propEq('a', 1))(xs1) = ${objToString(R.findLast(R.propEq('a', 1))(xs1))}`}</div>
        <div>{`R.findLast(R.propEq('a', 4))(xs1) = ${objToString(R.findLast(R.propEq('a', 4))(xs1))}`}</div>

        <h3>R.findLastIndex</h3>
        <div>{`const xs1 = [{ a: 1, b: 0 }, { a: 1, b: 1 }];`}</div>
        <div>{`R.findLastIndex(R.propEq('a', 1))(xs1) = ${objToString(R.findLastIndex(R.propEq('a', 1))(xs1))}`}</div>
        <div>{`R.findLastIndex(R.propEq('a', 4))(xs1) = ${objToString(R.findLastIndex(R.propEq('a', 4))(xs1))}`}</div>

      </div>
    );
  }
}
