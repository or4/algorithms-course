import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';


import { Base } from './Base';
import { Graph } from './Graph';
import { Search } from './Search';
import { Sort } from './Sort';


type Props = {
};
type State = {
};

export class Algorithms extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/algorithms/base`}>base</Link>
          <Link to={`/algorithms/graph`}>graph</Link>
          <Link to={`/algorithms/search`}>search</Link>
          <Link to={`/algorithms/sort`}>sort</Link>
        </div>
        <Switch>
          <Route path="/algorithms/base" component={Base} />
          <Route path="/algorithms/graph" component={Graph} />
          <Route path="/algorithms/search" component={Search} />
          <Route path="/algorithms/sort" component={Sort} />
        </Switch>
      </div>
    );
  }
}
