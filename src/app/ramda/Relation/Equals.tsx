import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

const equals = R.pipe(
  R.equals
);

  // R.all(R.equals(true), [
  //   R.complement(R.isEmpty)(anotherRecord.dest.txId),
  //   R.pathEq(['dest', 'isSuccessful'], false, anotherRecord),
  //   R.equals(record.dest.currencyName, anotherRecord.dest.currencyName),
  //   R.and(
  //     R.gte(anotherRecord.dest.timestamp, record.dest.timestamp - 10000),
  //     R.lte(anotherRecord.dest.timestamp, record.dest.timestamp + 10000),
  //   ),

export class Equals extends React.PureComponent<Props, State> {
  render() {

    const a = { x: 1 };
    const b = { x: 1 };
    const c = { x: 2 };
    const d = { y: 1 };

    return (
      <div>
        <h3>Equals</h3>
        <div>{`R.equals(1, 1) = ${R.equals(1, 1)}`}</div>
        <div>{`R.equals(1, '1' as any) = ${R.equals(1, '1' as any)}`}</div>
        <div>{`R.equals([1, 2, 3], [1, 2, 3]) = ${R.equals([1, 2, 3], [1, 2, 3])}`}</div>
        <div>&nbsp;</div>
        <div>{`const a = { x: 1 };`}</div>
        <div>{`const b = { x: 1 };`}</div>
        <div>{`const c = { x: 2 };`}</div>
        <div>{`const d = { y: 1 };`}</div>
        <div>{`R.equals(a, b) = ${R.equals(a, b)}`}</div>
        <div>{`R.equals(b, c) = ${R.equals(b, c)}`}</div>
        <div>{`R.equals(b, d as any) = ${R.equals(b, d as any)}`}</div>
      </div>
    );
  }
}
