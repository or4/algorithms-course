import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Description } from './Description';
import { MapLimitCustom } from './MapLimitCustom';
import { MapLimitLib } from './MapLimitLib';
import { ParallelLib } from './ParallelLib';
import { ParallelLimitLib } from './ParallelLimitLib';

type Props = {
};
type State = {
};

// https://api.coinmarketcap.com/v2/ticker
// https://api.github.com/users/octocat

export class Async extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/async/description`}>description</Link>
          <Link to={`/async/custom_mapLimit`}>custom mapLimit</Link>
          <Link to={`/async/mapLimitLib`}>mapLimitLib</Link>
          <Link to={`/async/parallelLib`}>parallelLib</Link>
          <Link to={`/async/parallelLimitLib`}>parallelLimitLib</Link>
        </div>
        <Switch>
          <Route path="/async/description" component={Description} />
          <Route path="/async/custom_mapLimit" component={MapLimitCustom} />
          <Route path="/async/mapLimitLib" component={MapLimitLib} />
          <Route path="/async/parallelLib" component={ParallelLib} />
          <Route path="/async/parallelLimitLib" component={ParallelLimitLib} />
        </Switch>
      </div>
    );
  }
}
