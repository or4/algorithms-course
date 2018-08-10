import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { BubbleSort, SelectionSort, MergeSort, InsertionSort, QuickSort, BinaryTreeSort, BinaryAvlTreeSort } from './sorts';
import { BinarySearch, InterpolationSearch } from './searches';
import { Karatsuba } from './Karatsuba';
import { Inversions } from './Inversions';
import { MatrixMultiply } from './MatrixMultiply';
import { KargerMinCut } from './KargerMinCut';

type Props = {
};
type State = {
};

const rawStyle = {
  link: {
    display: 'inline-block',
    padding: '10px',
  }
};

export class Algorithms extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>
          <Link style={rawStyle.link} to={`/algorithms/sorts/bubble`}>Bubble Sort</Link>
          <Link style={rawStyle.link} to={`/algorithms/sorts/selection`}>Selection Sort</Link>
          <Link style={rawStyle.link} to={`/algorithms/sorts/merge`}>Merge Sort</Link>
          <Link style={rawStyle.link} to={`/algorithms/sorts/insertion`}>Insertion Sort</Link>
          <Link style={rawStyle.link} to={`/algorithms/sorts/quick`}>Quick Sort</Link>
          <Link style={rawStyle.link} to={`/algorithms/sorts/binary`}>Binary Tree Sort</Link>
          <Link style={rawStyle.link} to={`/algorithms/sorts/binaryAvl`}>Binary AVL Tree Sort</Link>
          <Link style={rawStyle.link} to={`/algorithms/karatsuba`}>Karatsuba</Link>
          <Link style={rawStyle.link} to={`/algorithms/inversions`}>Inversions</Link>
          <Link style={rawStyle.link} to={`/algorithms/matrix-multiply`}>Matrix multiply</Link>
          <Link style={rawStyle.link} to={`/algorithms/karger`}>KargerMinCut</Link>
          <Link style={rawStyle.link} to={`/algorithms/searches/binary`}>BinarySearch</Link>
          <Link style={rawStyle.link} to={`/algorithms/searches/interpolation`}>InterpolationSearch</Link>
        </div>
        <Switch>
          <Route path="/algorithms/sorts/bubble" component={BubbleSort} />
          <Route path="/algorithms/sorts/selection" component={SelectionSort} />
          <Route path="/algorithms/sorts/merge" component={MergeSort} />
          <Route path="/algorithms/sorts/insertion" component={InsertionSort} />
          <Route path="/algorithms/sorts/quick" component={QuickSort} />
          <Route path="/algorithms/sorts/binary" component={BinaryTreeSort} />
          <Route path="/algorithms/sorts/binaryAvl" component={BinaryAvlTreeSort} />
          <Route path="/algorithms/karatsuba" component={Karatsuba} />
          <Route path="/algorithms/inversions" component={Inversions} />
          <Route path="/algorithms/matrix-multiply" component={MatrixMultiply} />
          <Route path="/algorithms/karger" component={KargerMinCut} />
          <Route path="/algorithms/searches/binary" component={BinarySearch} />
          <Route path="/algorithms/searches/interpolation" component={InterpolationSearch} />
        </Switch>
      </div>
    );
  }
}
