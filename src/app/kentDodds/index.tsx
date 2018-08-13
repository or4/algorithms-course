import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { SetState } from './SetState';
import { Children } from './Children';

type Props = {
};
type State = {
};
export class KentDodds extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/kent-dodds/ex1`}>SetState</Link>
          <Link to={`/kent-dodds/ex2`}>Children</Link>
        </div>
        <Switch>
          <Route path="/kent-dodds/ex1" component={SetState} />
          <Route path="/kent-dodds/ex2" component={Children} />
        </Switch>
      </div>
    );
  }
}
