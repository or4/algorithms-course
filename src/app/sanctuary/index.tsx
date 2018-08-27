import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { SimpleList } from './SimpleList';
import { Api } from './Api';

type Props = {
};
type State = {
};

export class Sanctuary extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/sanctuary/api`}>api</Link>
          <Link to={`/sanctuary/simplelist`}>simple list</Link>
        </div>
        <Switch>
          <Route path="/sanctuary/api" component={Api} />
          <Route path="/sanctuary/simplelist" component={SimpleList} />
        </Switch>
      </div>
    );
  }
}
