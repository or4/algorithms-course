import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class SortBy extends React.PureComponent<Props, State> {
  render() {
    // let sortByFirstItem = R.sortBy(R.prop(0));
    // let sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
    // let pairs = [[-1, 1], [-2, 2], [-3, 3]];
    // sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
    // let alice = {
    //   name: 'ALICE',
    //   age: 101
    // };
    // let bob = {
    //   name: 'Bob',
    //   age: -10
    // };
    // let clara = {
    //   name: 'clara',
    //   age: 314.159
    // };
    // let people = [clara, bob, alice];
    // sortByNameCaseInsensitive(people); //=> [alice, bob, clara]

    return (
      <div>
        <h3>R.sortBy</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
