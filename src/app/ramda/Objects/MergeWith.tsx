import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class MergeWith extends React.PureComponent<Props, State> {
  render() {
    R.mergeWith(R.concat,
      { a: true, values: [10, 20] },
      { b: true, values: [15, 35] });
    //=> { a: true, b: true, values: [10, 20, 15, 35] }

    // const concatValues = (k, l, r) => (k == 'values' ? R.concat(l, r) : r);
    // R.mergeWithKey(concatValues,
    //   { a: true, thing: 'foo', values: [10, 20] },
    //   { b: true, thing: 'bar', values: [15, 35] });
    //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }

    return (
      <div>
        <h3>R.mergeWith</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <h3>R.mergeWithKey</h3>
      </div>
    );
  }
}
