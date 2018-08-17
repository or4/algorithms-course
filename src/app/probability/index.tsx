import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Basics } from './Basics';

type Props = {
};
type State = {
};

export class Probability extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/probability/basics`}>basics</Link>
        </div>
        <Switch>
          <Route path="/probability/basics" component={Basics} />
        </Switch>
      </div>
    );
  }
}
