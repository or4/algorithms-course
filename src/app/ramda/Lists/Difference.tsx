import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Difference extends React.PureComponent<Props, State> {
  render() {

    const cmp = (x: any, y: any) => x.a === y.a;
    const l1 = [{ a: 1 }, { a: 2 }, { a: 3 }];
    const l2 = [{ a: 3 }, { a: 4 }];

    return (
      <div>
        <h3>R.difference</h3>
        <div>{`R.difference([1, 2, 3, 4], [7, 6, 5, 4, 3]) = ${objToString(R.difference([1, 2, 3, 4], [7, 6, 5, 4, 3]))}`}</div>
        <div>{`R.difference([7, 6, 5, 4, 3], [1, 2, 3, 4]) = ${objToString(R.difference([7, 6, 5, 4, 3], [1, 2, 3, 4]))}`}</div>
        <div>{`R.difference([{ a: 1 }, { b: 2 }], [{ a: 1 }, { c: 3 }] as any) = ${objToString(R.difference([{ a: 1 }, { b: 2 }], [{ a: 1 }, { c: 3 }] as any))}`}</div>
        <div>{`R.difference({a: 1, b: 2} as any, {b: 2, c: 3 as any}) = ${objToString(R.difference({ a: 1, b: 2 } as any, { b: 2, c: 3 } as any))}`}</div>

        <h3>R.differenceWith</h3>
        <div>{`const cmp = (x: any, y: any) => x.a === y.a;`}</div>
        <div>{`const l1 = [{ a: 1 }, { a: 2 }, { a: 3 }];`}</div>
        <div>{`const l2 = [{ a: 3 }, { a: 4 }];`}</div>
        <div>{`R.differenceWith(cmp, l1, l2) = ${objToString(R.differenceWith(cmp, l1, l2))}`}</div>
      </div>
    );
  }
}
