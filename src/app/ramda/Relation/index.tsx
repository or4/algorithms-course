import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Equals } from './Equals';

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
        </div>
        <Switch>
          <Route path="/ramda/relation/equals" component={Equals} />
        </Switch>
      </div>
    );
  }
}
