import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Arrayx } from './Arrayx';
import { Mapx } from './Mapx';

type Props = {
};
type State = {
};

export class Perfomance extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/ramda/perfomance/array`}>array</Link>
          <Link to={`/ramda/perfomance/map`}>map</Link>
        </div>
        <Switch>
          <Route path="/ramda/perfomance/array" component={Arrayx} />
          <Route path="/ramda/perfomance/map" component={Mapx} />
        </Switch>
      </div>
    );
  }
}
