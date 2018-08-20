import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class MergeWith extends React.PureComponent<Props, State> {
  render() {
    const concatValues = (k: string, l: any, r: any) => (k === 'values' ? R.concat(l, r) : r);

    return (
      <div>
        <h3>R.mergeWith</h3>
        <div>{`R.mergeWith(R.concat, { a: true, values: [10, 20] }, { b: true, values: [15, 35] }); = ${objToString(R.mergeWith(R.concat, { a: true, values: [10, 20] }, { b: true, values: [15, 35] }))}`}</div>

        <h3>R.mergeWithKey</h3>
        <div>{`const concatValues = (k: string, l: any, r: any) => (k === 'values' ? R.concat(l, r) : r);`}</div>
        <div>{`R.mergeWithKey(concatValues, { a: true, thing: 'foo', values: [10, 20] }, { b: true, thing: 'bar', values: [15, 35] }); = ${objToString(R.mergeWithKey(concatValues, { a: true, thing: 'foo', values: [10, 20] }, { b: true, thing: 'bar', values: [15, 35] }))}`}</div>
      </div>
    );
  }
}
