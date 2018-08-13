import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Invoker extends React.PureComponent<Props, State> {
  render() {
    const sliceFrom = R.invoker(1, 'slice');

    const sliceFrom6 = R.invoker(2, 'slice')(6);

    return (
      <div>
        <h3>R.invoker</h3>
        <h5>Case 1</h5>
        <div>{`const sliceFrom = R.invoker(1, 'slice');`}</div>
        <div>{`sliceFrom(6, '1234567890') = ${sliceFrom(6, '1234567890')}`}</div>

        <h5>Case 2</h5>
        <div>{`const sliceFrom6 = R.invoker(2, 'slice')(6);`}</div>
        <div>{`sliceFrom6(8, '1234567890') = ${sliceFrom6(8, '1234567890')}`}</div>
      </div>
    );
  }
}
