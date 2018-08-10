import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Apply extends React.PureComponent<Props, State> {
  render() {
    const nums = [1, 2, 3, -99, 42, 6, 7];
    const getMetrics = R.applySpec({ sum: R.add, nested: { mul: R.multiply }});
    const t42 = R.applyTo(42);

    return (
      <div>
        <h3>R.apply</h3>
        <div>{`const nums = [1, 2, 3, -99, 42, 6, 7];`}</div>
        <div>{`R.apply(Math.max, nums) = ${R.apply(Math.max, nums)}`}</div>
        <h3>R.applySpec</h3>
        <div>{`const getMetrics = R.applySpec({ sum: R.add, nested: { mul: R.multiply }});`}</div>
        <div>{`getMetrics(2, 4) = ${objToString(getMetrics(2, 4))}`}</div>
        <h3>R.applyTo</h3>
        <div>{`const t42 = R.applyTo(42);`}</div>
        <div>{`t42(R.identity) = ${t42(R.identity)}`}</div>
        <div>{`t42(R.add(1)) = ${t42(R.add(1))}`}</div>

        <h3>Unapply</h3>
        <div>{`R.unapply(JSON.stringify)(1, 2, 3) = ${R.unapply(JSON.stringify)(1, 2, 3, 4, 5)}`}</div>
        <div>{`R.unapply(JSON.stringify)({ a: 12, b: '12344' }) = ${R.unapply(JSON.stringify)({ a: 12, b: '12344' })}`}</div>
      </div>
    );
  }
}
