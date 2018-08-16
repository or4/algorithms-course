import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Where extends React.PureComponent<Props, State> {
  render() {
    // pred :: Object -> Boolean
    // let pred = R.where({
    //   a: R.equals('foo'),
    //   b: R.complement(R.equals('bar')),
    //   x: R.gt(R.__, 10),
    //   y: R.lt(R.__, 20)
    // });

    // pred({ a: 'foo', b: 'xxx', x: 11, y: 19 }); //=> true
    // pred({ a: 'xxx', b: 'xxx', x: 11, y: 19 }); //=> false
    // pred({ a: 'foo', b: 'bar', x: 11, y: 19 }); //=> false
    // pred({ a: 'foo', b: 'xxx', x: 10, y: 19 }); //=> false
    // pred({ a: 'foo', b: 'xxx', x: 11, y: 20 }); //=> false

    return (
      <div>
        <h3>R.where</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
      </div>
    );
  }
}
