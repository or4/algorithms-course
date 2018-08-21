import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Head extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.head</h3>
        <div>{`R.head(['fi', 'fo', 'fum']) = ${objToString(R.head(['fi', 'fo', 'fum']))}`}</div>
        <div>{`R.head([]) = ${objToString(R.head([]))}`}</div>
        <div>{`R.head('abc') = ${objToString(R.head('abc'))}`}</div>
        <div>{`R.head('') = ${objToString(R.head(''))}`}</div>

        <h3>R.last</h3>
        <div>{`R.last(['fi', 'fo', 'fum']) = ${objToString(R.last(['fi', 'fo', 'fum']))}`}</div>
        <div>{`R.last([]) = ${objToString(R.last([]))}`}</div>
        <div>{`R.last('abc') = ${objToString(R.last('abc'))}`}</div>
        <div>{`R.last('') = ${objToString(R.last(''))}`}</div>
      </div>
    );
  }
}
