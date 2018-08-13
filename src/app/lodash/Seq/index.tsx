import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Chain } from './Chain';

type Props = {
};
type State = {
};

export class Seq extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/lodash/seq/chain`}>chain</Link>
        </div>
        <Switch>
          <Route path="/lodash/seq/chain" component={Chain} />
        </Switch>
      </div>
    );
  }
}
