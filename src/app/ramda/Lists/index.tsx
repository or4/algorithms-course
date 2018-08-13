import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Chain } from './Chain';
import { Transduce } from './Transduce';

type Props = {
};
type State = {
};

export class Lists extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/ramda/lists/chain`}>chain</Link>
          <Link to={`/ramda/lists/transduce`}>transduce</Link>
        </div>
        <Switch>
          <Route path="/ramda/lists/chain" component={Chain} />
          <Route path="/ramda/lists/transduce" component={Transduce} />
        </Switch>
      </div>
    );
  }
}
