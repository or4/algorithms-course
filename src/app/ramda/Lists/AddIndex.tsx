import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class AddIndex extends React.PureComponent<Props, State> {
  render() {
    const mapIndexed = R.addIndex(R.map);
    const removeDupesFromSortedList = R.addIndex(R.filter)((it, ind, l: any) => (it !== l[ind + 1]));
    const arr = [1, 2, 3, 4, 5];
    const removeSecondItem = R.addIndex(R.filter)((value, index, array) => (index !== 1));

    return (
      <div>
        <h3>R.addIndex</h3>
        <h5>Case 1</h5>
        <div>{`const mapIndexed = R.addIndex(R.map);`}</div>
        <div>{`mapIndexed((val, key) => key + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']) = ${objToString(mapIndexed((val, key) => key + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']))}`}</div>
        <h5>Case 2</h5>
        <div>{`const removeDupesFromSortedList = R.addIndex(R.filter)((it, ind, l: any) => (it !== l[ind + 1]));`}</div>
        <div>{`removeDupesFromSortedList([1, 2, 2, 'a', 'a', 'b']) = ${objToString(removeDupesFromSortedList([1, 2, 2, 'a', 'a', 'b']))}`}</div>
        <h5>Case 3</h5>
        <div>{`const arr = [1, 2, 3, 4, 5];`}</div>
        <div>{`const removeSecondItem = R.addIndex(R.filter)((value, index, array) => (index !== 2));`}</div>
        <div>{`removeSecondItem(arr) = ${objToString(removeSecondItem(arr))}`}</div>
      </div>
    );
  }
}
