import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Init extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.init</h3>
        <div>{`R.init([1, 2, 3]) = ${objToString(R.init([1, 2, 3]))}`}</div>
        <div>{`R.init([1, 2]) = ${objToString(R.init([1, 2]))}`}</div>
        <div>{`R.init([1]) = ${objToString(R.init([1]))}`}</div>
        <div>{`R.init([]) = ${objToString(R.init([]))}`}</div>

        <div>{`R.init('abc') = ${objToString(R.init('abc'))}`}</div>
        <div>{`R.init('ab') = ${objToString(R.init('ab'))}`}</div>
        <div>{`R.init('a') = ${objToString(R.init('a'))}`}</div>
        <div>{`R.init('') = ${objToString(R.init(''))}`}</div>


        <h3>R.tail</h3>

        <div>{`R.tail([1, 2, 3]) = ${objToString(R.tail([1, 2, 3]))}`}</div>
        <div>{`R.tail([1, 2]) = ${objToString(R.tail([1, 2]))}`}</div>
        <div>{`R.tail([1]) = ${objToString(R.tail([1]))}`}</div>
        <div>{`R.tail([]) = ${objToString(R.tail([]))}`}</div>

        <div>{`R.tail('abc') = ${objToString(R.tail('abc'))}`}</div>
        <div>{`R.tail('ab') = ${objToString(R.tail('ab'))}`}</div>
        <div>{`R.tail('a') = ${objToString(R.tail('a'))}`}</div>
        <div>{`R.tail('') = ${objToString(R.tail(''))}`}</div>
      </div>
    );
  }
}
