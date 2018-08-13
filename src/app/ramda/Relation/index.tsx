import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Equals } from './Equals';
import { Identical } from './Identical';
import { Comprasions } from './Comprasions';
import { Min } from './Min';
import { Max } from './Max';

type Props = {
};
type State = {
};

export class Relation extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container-level">
        <div>
          <Link to={`/ramda/relation/equals`}>Equals</Link>
          <Link to={`/ramda/relation/identical`}>Identical</Link>
          <Link to={`/ramda/relation/comprasions`}>Comprasions</Link>
          <Link to={`/ramda/relation/min`}>Min</Link>
          <Link to={`/ramda/relation/max`}>Max</Link>
        </div>
        <Switch>
          <Route path="/ramda/relation/equals" component={Equals} />
          <Route path="/ramda/relation/identical" component={Identical} />
          <Route path="/ramda/relation/comprasions" component={Comprasions} />
          <Route path="/ramda/relation/min" component={Min} />
          <Route path="/ramda/relation/max" component={Max} />
        </Switch>
      </div>
    );
  }
}
