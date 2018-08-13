import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { MapObjIndexed } from './MapObjIndexed';

type Props = {
};
type State = {
};

export class Objects extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/ramda/objects/map`}>mapObjIndexed</Link>
        </div>
        <Switch>
          <Route path="/ramda/objects/map" component={MapObjIndexed} />
        </Switch>
      </div>
    );
  }
}
