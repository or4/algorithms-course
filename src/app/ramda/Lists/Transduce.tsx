import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Transduce extends React.PureComponent<Props, State> {
  render() {
    const numbers = [1, 2, 3, 4];
    const transducer = R.compose(R.map(R.add(1)), R.take(2));
    R.transduce(transducer, R.flip(R.append as any), [], numbers); //=> [2, 3]

    const isOdd = (x: number) => x % 2 === 1;
    const firstOddTransducer = R.compose(R.filter(isOdd), R.take(5) as any) as any;
    R.transduce(firstOddTransducer, R.flip(R.append as any), [], R.range(0, 100)); //=> [1]

    return (
      <div>
        <h3>R.transduce</h3>
        <h5>Case 1</h5>
        <div>{`const numbers = [1, 2, 3, 4];`}</div>
        <div>{`const transducer = R.compose(R.map(R.add(1)), R.take(2));`}</div>
        <div>{`R.transduce(transducer, R.flip(R.append), [], numbers) = ${R.transduce(transducer, R.flip(R.append as any), [], numbers)}`}</div>

        <h5>Case 2</h5>
        <div>{`const isOdd = (x: number) => x % 2 === 1;`}</div>
        <div>{`const firstOddTransducer = R.compose(R.filter(isOdd), R.take(5));`}</div>
        <div>{`R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)) = ${
          R.transduce(
            firstOddTransducer,
            R.flip(R.append as any),
            [],
            R.range(0, 100)
          )
        }`}</div>
      </div>
    );
  }
}
