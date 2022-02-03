import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { BubbleSort } from './BubbleSort';
import { SelectionSort } from './SelectionSort';
import { MergeSort } from './MergeSort';
import { QuickSort } from './QuickSort';
import { InsertionSort } from './InsertionSort';
import { BinaryTreeSort } from './BinaryTreeSort';
import { BinaryAvlTreeSort } from './BinaryAvlTreeSort';

type Props = {
};
type State = {
};

export class Sort extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/algorithms/sort/bubble`}>bubble</Link>
          <Link to={`/algorithms/sort/selection`}>selection</Link>
          <Link to={`/algorithms/sort/merge`}>merge</Link>
          <Link to={`/algorithms/sort/insertion`}>insertion</Link>
          <Link to={`/algorithms/sort/quick`}>quick</Link>
          <Link to={`/algorithms/sort/binary`}>binary tree</Link>
          <Link to={`/algorithms/sort/binaryAvl`}>binary avl tree</Link>
        </div>
        <Switch>
          <Route path="/algorithms/sort/bubble" component={BubbleSort} />
          <Route path="/algorithms/sort/selection" component={SelectionSort} />
          <Route path="/algorithms/sort/merge" component={MergeSort} />
          <Route path="/algorithms/sort/insertion" component={InsertionSort} />
          <Route path="/algorithms/sort/quick" component={QuickSort} />
          <Route path="/algorithms/sort/binary" component={BinaryTreeSort} />
          <Route path="/algorithms/sort/binaryAvl" component={BinaryAvlTreeSort} />
        </Switch>
      </div>
    );
  }
}
