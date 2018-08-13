import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

class Test {
  constructor(public testData: string) {}
  public show() {
    console.log('Some example:', this && this.testData);
  }
}

export class Bind extends React.PureComponent<Props, State> {
  render() {
    const test = new Test('hello test');
    const testF1 = test.show;
    testF1();
    test.show = R.bind(test.show, test);
    const testF2 = test.show;
    testF2();

    const log = R.bind(console.log, console);
    return (
      <div>
        <h3>R.bind</h3>
        <div>{`const log = R.bind(console.log, console);`}</div>
        <div>{`R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({ a: 1 }) = ${
          objToString(
            R.pipe(
              R.assoc('a', 2),
              R.tap(log),
              // R.tap(console.log),
              R.assoc('a', 3)
            )({ a: 1 })
          )
        }`}</div>
      </div>
    );
  }
}
