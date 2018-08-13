import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { SimpleJss } from './SimpleJss';

type Props = {
};
type State = {
};

export class Jss extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/jss`}>jss with changing props</Link>
        </div>
        <Switch>
          <Route path="/jss" component={SimpleJss} />
        </Switch>
      </div>
    );
  }
}
