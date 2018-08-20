import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Values extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.values</h3>
        <div>{`R.values({ a: 1, b: 2, c: 3 }) = ${objToString(R.values({ a: 1, b: 2, c: 3 }))}`}</div>
        <div>{`R.values([1, 2, 3]) = ${objToString(R.values([1, 2, 3]))}`}</div>
        <h3>R.valuesIn</h3>
        <h5>Returns a list of all the properties, including prototype properties, of the supplied object. Note that the order of the output array is not guaranteed to be consistent across different JS platforms.</h5>
      </div>
    );
  }
}
