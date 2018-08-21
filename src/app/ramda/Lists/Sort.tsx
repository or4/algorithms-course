import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Sort extends React.PureComponent<Props, State> {
  render() {
    let diff = function(a: number, b: number) { return a - b };
    R.sort(diff, [4, 2, 7, 5]); //=> [2, 4, 5, 7]


    let sortByFirstItem = R.sortBy(R.prop('0'));
    let sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
    let pairs = [[-1, 1], [-2, 2], [-3, 3]];
    sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
    const alice = {
      name: 'ALICE',
      age: 101
    };
    const bob = {
      name: 'Bob',
      age: -10
    };
    const clara = {
      name: 'clara',
      age: 314.159
    };
    const people = [clara, bob, alice];
    sortByNameCaseInsensitive(people); //=> [alice, bob, clara]


    let ageNameSort = R.sortWith([
      R.descend(R.prop('age')),
      R.ascend(R.prop('name'))
    ]);
    ageNameSort(people); //=> [alice, clara, bob]

    return (
      <div>
        <h3>R.sort</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
