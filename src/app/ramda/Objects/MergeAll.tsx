import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class MergeAll extends React.PureComponent<Props, State> {
  render() {
    R.mergeAll([{ foo: 1 }, { bar: 2 }, { baz: 3 }]); //=> {foo:1,bar:2,baz:3}
    R.mergeAll([{ foo: 1 }, { foo: 2 }, { bar: 2 }]); //=> {foo:2,bar:2}
    return (
      <div>
        <h3>R.mergeAll</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
      </div>
    );
  }
}
