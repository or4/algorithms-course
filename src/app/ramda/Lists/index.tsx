import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Chain } from './Chain';

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

export class Lists extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>
          <Link style={rawStyle.link} to={`/ramda/lists/chain`}>Chain</Link>
        </div>
        <Switch>
          <Route path="/ramda/lists/chain" component={Chain} />
        </Switch>
      </div>
    );
  }
}
