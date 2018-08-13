import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { LoadingScreenExample } from './LoadingScreenExample';

type Props = {
};
type State = {
};

export class Hoc extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/hoc`}>hoc with</Link>
        </div>
        <Switch>
          <Route path="/hoc" component={LoadingScreenExample} />
        </Switch>
      </div>
    );
  }
}
