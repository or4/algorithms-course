import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Has extends React.PureComponent<Props, State> {
  render() {
    const hasName = R.has('name');
    hasName({ name: 'alice' });
    hasName({ name: 'bob' });
    hasName({});

    return (
      <div>
        <h3>R.has</h3>
        <h5>Returns whether or not an object has an own property with the specified name</h5>
        <div>{`const hasName = R.has('name');`}</div>
        <div>{`hasName({ name: 'alice' }) = ${objToString(hasName({ name: 'alice' }))}`}</div>
        <div>{`hasName({ name: 'bob' }) = ${objToString(hasName({ name: 'bob' }))}`}</div>
        <div>{`hasName({}) = ${objToString(hasName({}))}`}</div>

        <h3>R.hasIn</h3>
        <h5>Returns whether or not an object or its prototype chain has a property with the specified name</h5>
      </div>
    );
  }
}
