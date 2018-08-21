import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Split extends React.PureComponent<Props, State> {
  render() {
    let pathComponents = R.split('/');
    R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']

    R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']

    R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
    R.splitAt(5, 'hello world');      //=> ['hello', ' world']
    R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']


    R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
    R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']

    R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]

    return (
      <div>
        <h3>R.splitAt</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
