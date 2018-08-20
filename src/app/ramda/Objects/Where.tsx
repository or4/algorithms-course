import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Where extends React.PureComponent<Props, State> {
  render() {
    // pred :: Object -> Boolean
    const pred = R.where({
      a: R.equals('foo'),
      b: R.complement(R.equals('bar')),
      x: R.partialRight(R.gt, [10]),
      y: R.partialRight(R.lt, [20])
    });

    pred({ a: 'foo', b: 'xxx', x: 11, y: 19 });
    pred({ a: 'xxx', b: 'xxx', x: 11, y: 19 });
    pred({ a: 'foo', b: 'bar', x: 11, y: 19 });
    pred({ a: 'foo', b: 'xxx', x: 10, y: 19 });
    pred({ a: 'foo', b: 'xxx', x: 11, y: 20 });

    return (
      <div>
        <h3>R.where</h3>
        <div>{`const pred = R.where({`}</div>
        <div>{`a: R.equals('foo'),`}</div>
        <div>{`b: R.complement(R.equals('bar')),`}</div>
        <div>{`x: R.partialRight(R.gt, [10]),`}</div>
        <div>{`y: R.partialRight(R.lt, [20])`}</div>
        <div>{`});`}</div>

        <div>{`pred({ a: 'foo', b: 'xxx', x: 11, y: 19 }) = ${objToString(pred({ a: 'foo', b: 'xxx', x: 11, y: 19 }))}`}</div>
        <div>{`pred({ a: 'xxx', b: 'xxx', x: 11, y: 19 }) = ${objToString(pred({ a: 'xxx', b: 'xxx', x: 11, y: 19 }))}`}</div>
        <div>{`pred({ a: 'foo', b: 'bar', x: 11, y: 19 }) = ${objToString(pred({ a: 'foo', b: 'bar', x: 11, y: 19 }))}`}</div>
        <div>{`pred({ a: 'foo', b: 'xxx', x: 10, y: 19 }) = ${objToString(pred({ a: 'foo', b: 'xxx', x: 10, y: 19 }))}`}</div>
        <div>{`pred({ a: 'foo', b: 'xxx', x: 11, y: 20 }) = ${objToString(pred({ a: 'foo', b: 'xxx', x: 11, y: 20 }))}`}</div>
      </div>
    );
  }
}
