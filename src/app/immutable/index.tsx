import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Listx } from './Listx';
import { Mapx } from './Mapx';
import { SimpleBook } from './SimpleBook';

type Props = {
};
type State = {
};

export class Immutable extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/immutable/book`}>book</Link>
          <Link to={`/immutable/list`}>list</Link>
          <Link to={`/immutable/map`}>map</Link>
        </div>
        <Switch>
          <Route path="/immutable/book" component={SimpleBook} />
          <Route path="/immutable/list" component={Listx} />
          <Route path="/immutable/map" component={Mapx} />
        </Switch>
      </div>
    );
  }
}
