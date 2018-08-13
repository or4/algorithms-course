import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Seq } from './Seq';

type Props = {
};
type State = {
};

export class Lodash extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/lodash/seq`}>Seq</Link>
        </div>

        <Switch>
          <Route path="/lodash/seq" component={Seq} />
        </Switch>
      </div>
    );
  }
}
