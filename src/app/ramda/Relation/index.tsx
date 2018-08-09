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

const rawStyle = {
  link: {
    display: 'inline-block',
    padding: '10px',
  }
};

export class Relation extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>
          <Link style={rawStyle.link} to={`/ramda/relation/equals`}>Equals</Link>
          <Link style={rawStyle.link} to={`/ramda/relation/identical`}>Identical</Link>
          <Link style={rawStyle.link} to={`/ramda/relation/comprasions`}>Comprasions</Link>
          <Link style={rawStyle.link} to={`/ramda/relation/min`}>Min</Link>
          <Link style={rawStyle.link} to={`/ramda/relation/max`}>Max</Link>
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
