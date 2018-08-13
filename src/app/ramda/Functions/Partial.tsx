import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Partial extends React.PureComponent<Props, State> {
  render() {
    const concat = (a: string, b: string) => a + b;
    const addToA = R.partial(concat, ['testA']);
    const addToAR = R.partialRight(concat, ['testA']);

    const arrToString = R.pipe(
      R.join(', '),
      R.concat('['),
      R.partialRight(R.concat, [']']),
    );

    return (
      <div>
        <h3>R.partial</h3>
        <h5>Works as bind with args but without context</h5>
        <div>{`const concat = (a: string, b: string) => a + b;`}</div>
        <div>{`const addToA = R.partial(concat, ['testA']);`}</div>
        <div>{`addToA('testB') = ${addToA('testB')}`}</div>

        <h3>R.partialRight</h3>

        <h5>Case with R.concat</h5>
        <div>{`const arrToString = R.pipe(`}</div>
        <div>{`R.join(', '),`}</div>
        <div>{`R.concat('['),`}</div>
        <div>{`R.partialRight(R.concat, [']']),`}</div>
        <div>{`);`}</div>
        <div>{`arrToString([1, 2, 3]) = ${arrToString([1, 2, 3])}`}</div>

        <h5>Case smth</h5>
        <div>{`const concat = (a: string, b: string) => a + b;`}</div>
        <div>{`const addToAR = R.partialRight(concat, ['testA']);`}</div>
        <div>{`addToAR('testB') = ${addToAR('testB')}`}</div>

      </div>
    );
  }
}
