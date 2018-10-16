import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { SimpleIterator } from './SimpleIterator';

type Props = {
};
type State = {
};

export class Iterator extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/iterator`}>Simple</Link>
        </div>
        <Switch>
          <Route path="/iterator" component={SimpleIterator} />
        </Switch>
      </div>
    );
  }
}
