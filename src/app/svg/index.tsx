import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Add } from './Add';
import { Gradients } from './Gradients';
import { Masks } from './Masks';

type Props = {
};
type State = {
};

export class Svg extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/svg/add`}>add</Link>
          <Link to={`/svg/gradients`}>gradients</Link>
          <Link to={`/svg/masks`}>masks</Link>
        </div>

        <Switch>
          <Route path="/svg/add" component={Add} />
          <Route path="/svg/gradients" component={Gradients} />
          <Route path="/svg/masks" component={Masks} />
        </Switch>
      </div>
    );
  }
}
