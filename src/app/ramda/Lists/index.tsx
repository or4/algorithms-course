import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Chain } from './Chain';

type Props = {
};
type State = {
};

export class Lists extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container-level">
        <div>
          <Link to={`/ramda/lists/chain`}>Chain</Link>
        </div>
        <Switch>
          <Route path="/ramda/lists/chain" component={Chain} />
        </Switch>
      </div>
    );
  }
}
