import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Tap extends React.PureComponent<Props, State> {
  render() {
    const sayX = (x: number) => console.log('x is ' + x);

    return (
      <div>
        <h3>R.tap</h3>
        <h5>Runs the given function with the supplied object, then returns the object.</h5>
        <h5>Case 1</h5>
        <div>{`const sayX = (x: number) => console.log('x is ' + x);`}</div>
        <div>{`R.tap(sayX, 100) = ${R.tap(sayX, 100)}`}</div>
        <h5>Case 2</h5>
        <div>{`R.pipe(R.tap(console.log), R.join('/'))([1, 2, 3]) = ${R.pipe(R.tap(console.log), R.map(R.inc), R.join(' / '))([1, 2, 3])}`}</div>
      </div>
    );
  }
}
