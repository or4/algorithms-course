import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { SimpleGenerator } from './SimpleGenerator';

type Props = {
};
type State = {
};


export class Generators extends React.PureComponent<Props, State> {
  render() {


    return (
      <div className="menu-container">
        <div>
          <Link to={`/generators`}>Simple</Link>
        </div>
        <Switch>
          <Route path="/generators" component={SimpleGenerator} />
        </Switch>
      </div>
    );
  }
}
