import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Conjunction } from './Conjunction';

type Props = {
};
type State = {
};

export class NN extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/nn/and`}>Conjunction</Link>
        </div>
        <Switch>
          <Route path="/nn/and" component={Conjunction} />
        </Switch>
      </div>
    );
  }
}
