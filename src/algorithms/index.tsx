import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { SelectionSortComponent } from './sorts/SelectionSort';
import { MergeSort } from './sorts/MergeSort';
import { Karatsuba } from './Karatsuba';
import { Inversions } from './Inversions';
import { MatrixMultiply } from './MatrixMultiply';

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
          <Link style={rawStyle.link} to={`/algorithms/sorts/selection`}>Selection Sort</Link>
          <Link style={rawStyle.link} to={`/algorithms/sorts/merge`}>Merge Sort</Link>
          <Link style={rawStyle.link} to={`/algorithms/karatsuba`}>Karatsuba</Link>
          <Link style={rawStyle.link} to={`/algorithms/inversions`}>Inversions</Link>
          <Link style={rawStyle.link} to={`/algorithms/matrix-multiply`}>Matrix multiply</Link>
        </div>
        <Switch>
          <Route path="/algorithms/sorts/selection" component={SelectionSortComponent} />
          <Route path="/algorithms/sorts/merge" component={MergeSort} />
          <Route path="/algorithms/karatsuba" component={Karatsuba} />
          <Route path="/algorithms/inversions" component={Inversions} />
          <Route path="/algorithms/matrix-multiply" component={MatrixMultiply} />
        </Switch>
      </div>
    );
  }
}
