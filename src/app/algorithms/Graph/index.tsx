import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { KargerMinCut } from './KargerMinCut';
import { Sccs } from './Sccs';
import { GraphLectures } from './Lectures';

type Props = {
};
type State = {
};

export class Graph extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/algorithms/graph/karger`}>karger min cut</Link>
          <Link to={`/algorithms/graph/lectures`}>lectures</Link>
          <Link to={`/algorithms/graph/sccs`}>sccs</Link>
        </div>
        <Switch>
          <Route path="/algorithms/graph/karger" component={KargerMinCut} />
          <Route path="/algorithms/graph/lectures" component={GraphLectures} />
          <Route path="/algorithms/graph/sccs" component={Sccs} />
        </Switch>
      </div>
    );
  }
}

