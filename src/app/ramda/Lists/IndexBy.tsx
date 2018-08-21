import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class IndexBy extends React.PureComponent<Props, State> {
  render() {
    const list = [{ id: 'xyz', title: 'A' }, { id: 'abc', title: 'B' }];

    return (
      <div>
        <h3>R.indexBy</h3>
        <div>{`const list = [{ id: 'xyz', title: 'A' }, { id: 'abc', title: 'B' }];`}</div>
        <div>{`R.indexBy(R.prop('id'), list) = ${objToString(R.indexBy(R.prop('id'), list))}`}</div>
      </div>
    );
  }
}
