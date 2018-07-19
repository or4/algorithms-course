import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { SelectionSort } from './SelectionSort';
import { MergeSort } from './MergeSort';
import { Karatsuba } from './Karatsuba';

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
        </div>
        <Switch>
          <Route path="/algorithms/sorts/selection" component={SelectionSort} />
          <Route path="/algorithms/sorts/merge" component={MergeSort} />
          <Route path="/algorithms/karatsuba" component={Karatsuba} />
        </Switch>
      </div>
    );
  }
}
