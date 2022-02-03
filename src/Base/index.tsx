import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Inversions } from './Inversions';
import { Karatsuba } from './Karatsuba';

type Props = {
};
type State = {
};

export class Base extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/algorithms/base/karatsuba`}>karatsuba</Link>
          <Link to={`/algorithms/base/inversions`}>inversions</Link>
        </div>
        <Switch>
          <Route path="/algorithms/base/karatsuba" component={Karatsuba} />
          <Route path="/algorithms/base/inversions" component={Inversions} />
        </Switch>
      </div>
    );
  }
}

