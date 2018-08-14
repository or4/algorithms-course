import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { BinarySearch } from './BinarySearch';
import { InterpolationSearch } from './InterpolationSearch';

type Props = {
};
type State = {
};

export class Search extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/algorithms/search/binary`}>binary</Link>
          <Link to={`/algorithms/search/interpolation`}>interpolation</Link>
        </div>
        <Switch>
          <Route path="/algorithms/search/binary" component={BinarySearch} />
          <Route path="/algorithms/search/interpolation" component={InterpolationSearch} />
        </Switch>
      </div>
    );
  }
}

