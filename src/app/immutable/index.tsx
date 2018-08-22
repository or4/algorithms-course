import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Mapx } from './Mapx';

type Props = {
};
type State = {
};

export class Immutable extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/immutable/map`}>map</Link>
        </div>
        <Switch>
          <Route path="/immutable/map" component={Mapx} />
        </Switch>
      </div>
    );
  }
}
