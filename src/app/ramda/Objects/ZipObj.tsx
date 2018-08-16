import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class ZipObj extends React.PureComponent<Props, State> {
  render() {
    R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]

    R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}

    let f = (x: any, y: any) => {
      // ...
    };
    R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
    //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]

    return (
      <div>
        <h3>R.zip</h3>
        <h3>R.zipObj</h3>
        <h3>R.zipWith</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
      </div>
    );
  }
}
