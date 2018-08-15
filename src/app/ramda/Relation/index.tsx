import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Comprasions } from './Comprasions';
import { Equals } from './Equals';
import { Identical } from './Identical';
import { Max } from './Max';
import { Min } from './Min';

type Props = {
};
type State = {
};

export class Relation extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/ramda/relation/comprasions`}>comprasions</Link>
          <Link to={`/ramda/relation/equals`}>equals</Link>
          <Link to={`/ramda/relation/identical`}>identical</Link>
          <Link to={`/ramda/relation/max`}>max</Link>
          <Link to={`/ramda/relation/min`}>min</Link>
        </div>
        <Switch>
          <Route path="/ramda/relation/comprasions" component={Comprasions} />
          <Route path="/ramda/relation/equals" component={Equals} />
          <Route path="/ramda/relation/identical" component={Identical} />
          <Route path="/ramda/relation/max" component={Max} />
          <Route path="/ramda/relation/min" component={Min} />
        </Switch>
      </div>
    );
  }
}
