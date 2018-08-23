import React from 'react';
import * as R from 'ramda';
import { List } from 'immutable';
import { objToString } from '../../ramda/helpers';

type Props = {
};
type State = {
};

export class Listx extends React.PureComponent<Props, State> {
  render() {
    const list = List([1, 2, 3, 4]);

    return (
      <div>
        <h3>List</h3>
        <a href="https://facebook.github.io/immutable-js/docs/#/List" target="_blank"><h5>Docs here</h5></a>
        <div>{`const list = List([1, 2, 3, 4]);`}</div>
        <div>{`list.first() = ${objToString(list.first())}`}</div>
        <div>{`list.last() = ${objToString(list.last())}`}</div>
        <div>{`list.shift().toJS() = ${objToString(list.shift().toJS())}`}</div>
        <div>{`list.unshift().toJS() = ${objToString(list.unshift(8).toJS())}`}</div>
      </div>
    );
  }
}
