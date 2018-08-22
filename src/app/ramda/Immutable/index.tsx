import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Values } from './Values';

type Props = {
};
type State = {
};

export class Immutable extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/ramda/immutable/values`}>values</Link>
        </div>
        <Switch>
          <Route path="/ramda/immutable/values" component={Values} />
        </Switch>
      </div>
    );
  }
}
