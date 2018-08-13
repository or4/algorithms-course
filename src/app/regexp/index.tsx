import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { PasswordRegExp } from './PasswordRegExp';

type Props = {
};
type State = {
};

export class Regexp extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/regexp`}>PasswordRegExp</Link>
        </div>
        <Switch>
          <Route path="/regexp" component={PasswordRegExp} />
        </Switch>
      </div>
    );
  }
}
