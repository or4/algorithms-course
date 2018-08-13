import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Chain extends React.PureComponent<Props, State> {
  render() {
    const duplicate = (n: number) => [n, [2 * n, [3 * n]]];
    // R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]

    const res = R.pipe(
      R.chain(duplicate),
      R.join(', ')
    )([1, 2, 3]);
    console.log('res', res);

    return (
      <div>
        <h3>R.chain as flatMap</h3>

        <div>{`const duplicate = (n: number) => [n, [2 * n, [3 * n]]];`}</div>
        <div>{`R.chain(duplicate, [1, 2, 3]) = ${R.chain(duplicate, [1, 2, 3])}`}</div>
      </div>
    );
  }
}
